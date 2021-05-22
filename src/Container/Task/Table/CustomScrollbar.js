import React, { Component } from "react";
import Axios from 'axios';
import Card from './card';
import './card.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 20,
            loading: false,
            list: [],
            page: 1,
            per_page: 10,
            hasMore: true,
        };
    }

    componentDidMount() {
        this.getPhotoList();
        // Detect when scrolled to bottom.
        this.refs.myscroll.addEventListener("scroll", () => {
            if (
                this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
                this.refs.myscroll.scrollHeight
            ) {
                this.loadMore();
            }
        });
    }

    /*
    ** called the API and send @params, page and page_size
    */
    getPhotoList = () => {
        this.setState({ loading: true });
        Axios.get('https://api.instantwebtools.net/v1/passenger?page=' + this.state.page + '&size=' + this.state.per_page
        )
            .then((res) => {
                this.setState({ list: [...this.state.list, ...res.data.data], loading: false });
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    /*
    ** when scrollbar go to down, then this function and update the API params
    */
    fetchMoreData = () => {
        if (this.state.list.length < 50) {
            this.setState({ page: this.state.page + 1 }, () => {
                this.getPhotoList();
            })
        }
        else {
            this.setState({ hasMore: false });
        }
    }

    showItems() {
        var items = [];
        for (var i = 0; i < this.state.items; i++) {
            items.push(<li key={i}>Item {i}</li>);
        }
        return items;
    }

    loadMore() {
        this.fetchMoreData();
    }

    render() {
        return (
            <div
                className="App"
                ref="myscroll"
                style={{
                    height: "630px",
                    overflow: "auto"
                }}
            >
                <div className="button-position">
                    <button className="button-style" onClick={() => this.props.history.push('/task/new')}>
                        Go to Task List
                </button>
                </div>
                <ul>
                    <Card
                        list={this.state.list}
                        clickOnPhoto={this.clickOnPhotoHandler}
                    />
                </ul>
                {!this.state.hasMore && (
                    <p className="App-intro">
                        You have seen it All!
                    </p>
                )}
                {this.state.loading
                    ? <p className="App-intro">
                        loading ...
                </p>
                    : ""}

            </div>
        );
    }
}

export default App;
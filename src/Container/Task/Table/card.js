import React, { useState, useEffect } from 'react';
import './card.css';

const Card = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        if (props.list) {
            setList(props.list);
        }
    }, [props.list]);

    return (
        <div>
            <div className="row" >
                {list && list.length > 0 && (
                    list.map((val, index) => {
                        return (
                            <div className="column" key={index}>
                                <div className="card">
                                    <img src={val.airline.logo} alt="" style={{ height: '70px' }} />
                                    <p>{val.airline.name}</p>
                                    <p>{val.airline.country}</p>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Card;
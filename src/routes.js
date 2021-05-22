import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import App from './Container/home/App';
import Table from './Container/Task/Table/CustomScrollbar';
import AddNewTask from './Container/Task/Add/addTask';
import PageNotFound from './Container/PageNotFound';

const routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={App} />
                <Route
                    exact
                    path="/task"
                    component={Table} />
                <Route
                    exact
                    path="/task/new"
                    component={AddNewTask} />
                <Route
                    path=""
                    component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default routes;
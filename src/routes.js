import React from 'react';
import { Router, Route, Link, Switch } from "react-router-dom";
import Buyticket from './client/containers/Buyticket';
import HomePage from './client/containers/HomePage';

export default () => {
    return (
        <div>
            <Route exact path="/" component={ HomePage } />
            <Route path="/buyticket" component={ Buyticket } />
        </div>
    )
}
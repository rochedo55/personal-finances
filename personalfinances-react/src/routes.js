import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Revenues from './pages/Revenues';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/revenues" component={Revenues} />
        </Switch>
    );
}
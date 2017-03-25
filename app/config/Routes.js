import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

const routes = (
    <Router history={hashHistory} >
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routes
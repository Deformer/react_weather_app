import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main';
import Home from '../components/Home';
import PickCityFormContainer from '../containers/PickCityFormContainer';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={PickCityFormContainer} />
        </Route>
    </Router>
);

export default routes
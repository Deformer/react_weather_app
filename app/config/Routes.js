import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import Main from "../components/Main/Main";
import PickCityForm from "../components/PickCityForm/PickCityForm";
import Forecast from "../components/Forecast/Forecast";
import Detail from "../components/Detail/Detail";
import weather from '../reducers/weather';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import city from '../reducers/city';
import { getWeather } from '../actions/weather.actions';


const weatherApp = combineReducers({
    weather,
    city
});

const store = createStore(
    weatherApp,
    applyMiddleware(
        thunkMiddleware
    )
);

const routes = (
    <Provider store={store} >
        <Router history={hashHistory}>
            <Route path="/" component={Main} >
                <IndexRoute component={PickCityForm} />
                <Route path="/forecast/:city" component={Forecast}/>
                <Route path="/detail/:city/:index" component={Detail}/>
            </Route>
        </Router>
    </Provider>
);

export default routes;
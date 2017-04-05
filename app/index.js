import {render} from "react-dom";
import routes from "./config/Routes";
import weather from './reducers/weather';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import React from 'react'
import city from './reducers/city';
require('./styles/main.css');

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

render(
    <Provider store={store} >
        {routes}
    </Provider>,
    document.getElementById("app")
);
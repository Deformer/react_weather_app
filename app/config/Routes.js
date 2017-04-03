import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import Main from "../components/Main/Main";
import PickCityForm from "../components/PickCityForm/PickCityForm";
import Forecast from "../components/Forecast/Forecast";
import Detail from "../components/Detail/Detail";

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={PickCityForm} />
            <Route path="/forecast/:city" component={Forecast}/>
            <Route path="/detail" component={Detail}/>
        </Route>
    </Router>
);

export default routes;
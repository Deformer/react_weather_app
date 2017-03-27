import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import Main from "../components/Main";
import PickCityFormContainer from "../containers/PickCityFormContainer";
import ForeCastContainer from "../containers/ForeCastContainer";
import DetailContainer from "../containers/DetailContainer";

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={PickCityFormContainer} />
            <Route path="/forecast/:city" component={ForeCastContainer}/>
            <Route path="/detail" component={DetailContainer}/>
        </Route>
    </Router>
);

export default routes;
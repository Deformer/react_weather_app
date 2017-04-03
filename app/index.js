import {render} from "react-dom";
import routes from "./config/Routes";
require('./styles/main.css');
render(
    routes,
    document.getElementById("app")
);
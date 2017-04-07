import {render} from 'react-dom';
import routes from './config/Routes';
import React from 'react';
require('./styles/main.css');


render(
    routes,
    document.getElementById('app')
);
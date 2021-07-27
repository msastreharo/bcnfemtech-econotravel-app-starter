// Al incluír aquí el SCSS hacemos que webpack genere
// un archivo bundle.js que contiene tanto el javascript
// como el CSS
import '../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap';

import {App} from './components/App'

ReactDOM.render(
    React.createElement(App),
    document.getElementById("app")
)
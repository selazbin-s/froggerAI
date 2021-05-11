import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import reactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './components/app/App';
import './index.css';

reactDom.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById("Root")
)
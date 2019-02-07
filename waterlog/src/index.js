import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss'
import './Stylesheets/_index.scss';
import './Stylesheets/_header.scss';
import App from './App';
import StepperComponent from './Components/StepperComponent';
import ShapesComponent from './Components/ShapesComponent';

import SensorComponent from './Components/SensorComponent';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './../src/store';



 
ReactDOM.render(<Provider store={store}><ShapesComponent/></Provider>, document.getElementById('root'));// must change to sensorcomponentAPP


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
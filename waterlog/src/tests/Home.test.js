import 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

import HomeComponent from './../Pages/Home'


it('Home page renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<HomeComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});



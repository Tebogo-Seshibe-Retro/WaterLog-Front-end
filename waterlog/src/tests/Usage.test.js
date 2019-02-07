import 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

import UsageComponent from './../Pages/Usage'
import AlertTableComponent  from './../Components/AlertTable_'

it('Usage page renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<UsageComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});



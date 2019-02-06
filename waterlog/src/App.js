import React, { Component } from 'react';
import './App.scss';
import StepperComponent from './Components/StepperComponent';
import NavComponent from './Components/NavComponent';
import HeaderComponent from './Components/Header';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <NavComponent />
        <StepperComponent/>
        
      </div>
    );
  }
}

export default App;

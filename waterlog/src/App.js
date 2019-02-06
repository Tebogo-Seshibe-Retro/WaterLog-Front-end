import React, { Component } from 'react';
import './App.scss';
import StepperComponent from './Components/StepperComponent';
import NavComponent from './Components/NavComponent';
import HeaderComponent from './Components/Header';


class App extends Component {
  constructor(){
    super();

    this.toggleDrawer = this.toggleDrawer.bind(this);

    this.state = {
      left: false,
      right: false
    }
}

toggleDrawer(side, open){
  this.setState({ ...this.state, [side]: open })
}


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

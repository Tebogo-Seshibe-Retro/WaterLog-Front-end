import React, { Component } from 'react';
import ProgressBarComponent from './../Components/ProgressBar';

class WastageSummaryComponent extends Component {

  percent = this.props.percent;
  waterLost = this.props.waterLost;

  styles = {
    mild: {
        textAlign: 'center',
        color: '#4f5b62',
        backgroundColor: '#f6f6f6',
        borderRadius: '5px',
        padding: '5px'
        //height: '100px'
    },
    moderate: {
        textAlign: 'center',
        color: 'white'
    }, 
    severe: {
        textAlign: 'center',
        color:'red'
    }
  }

  render() {
    return (
        <div style={{textAlign:"center", margin: "10px"}}>
          <h3>Wastage</h3>
          <div style={this.styles.mild}>
              <h2>{ this.percent }% or { this.waterLost }l</h2>
              <p>(of the total water used is being lost due to this pipe</p>
                  <ProgressBarComponent percentage={ this.percent} />
              <p style={{marginTop: "5px"}}>(only {100 - this.percent }% of the water passing out the tanks through the system is being used)</p>
          </div>
        </div>
    );
  }
}

export default WastageSummaryComponent;
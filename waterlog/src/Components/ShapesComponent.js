import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSensors } from '../actions/SensorActions';

const commonX = 200;
const radius = 10;
const initialY = 20;
const lineLength = 60;

const sensorId = 5;///
 class ShapesComponent extends React.Component {

  componentWillMount() {
    this.props.fetchSensors();
  }

    render() {
      const sensorItems = this.props.sensors.map(sensor => (
        <div key={sensor.id}>
          
          <h3>{sensor.type}{sensor.id}</h3>
          <p>{sensor.status}</p>
          <p>{sensor.max_flow}</p>
        </div>
      ));
        return (
          
            <div >
              <svg>
                {
                  (() => {//main
    
                    const top = () => { //top circle
    
                      const status =0; //1 -fault
    
                      const id = sensorId - 1;
                    
                      if (id > 0) {
    
                        let _status = "go"; //1 -fault
                        //fecth from db
                      
    
                        console.log( _status)
                        if (status) {
    
                          return <g>
                            <line x1={commonX} y1={initialY} x2={commonX} y2={initialY + lineLength} fill="grey" stroke="grey"></line>
                            <circle cx={commonX} cy={initialY} r={radius} fill="red" />
                            <text x={commonX - 3} y={initialY} stroke="black" stroke-width="2px" dy=".3em">{id}</text>
                          </g>;
                        } else {
                          return <g>
                            <line x1={commonX} y1={initialY} x2={commonX} y2={initialY + lineLength} fill="grey" stroke="grey"></line>
                            <circle cx={commonX} cy={initialY} r={radius} fill="grey" /> 
                            <text x={commonX - 3} y={initialY} stroke="black" stroke-width="2px" dy=".3em">{id}</text>
                            <text x={commonX +20} y={initialY} stroke="grey" stroke-width="2px" dy=".5em">100% Waterddddddddddd</text>
                          
                          </g>;
                        }
                      }
                    }
    
                    const middle = () => { //middle
    
                      //fecth from db
                    
                      const status = 1; //1 -fault
                      const id = sensorId;
    
                      if (status) {
                        return <g>
                          <line x1={commonX} y1={initialY + lineLength} x2={commonX} y2={initialY + 2 * lineLength} fill="grey" stroke="grey"></line>
                          <circle cx={commonX} cy={initialY + lineLength} r={radius} fill="red" />
                          <text x={commonX - 3} y={initialY + lineLength} stroke="black" stroke-width="2px" dy=".3em">{id}</text>
                          <text x={commonX + 20} y={initialY + lineLength} stroke="grey" stroke-width="2px" dy=".3em">0% Water</text>
                        </g>;
                      } else {
                        return <g>
                          <line x1={commonX} y1={initialY + lineLength} x2={commonX} y2={initialY + 2 * lineLength} fill="grey" stroke="grey"></line>
                          <circle cx={commonX} cy={initialY + lineLength} r={radius} fill="grey" />
                          <text x={commonX - 3} y={initialY + lineLength} stroke="grey" stroke-width="2px" dy=".3em">{id}</text>
                         
                          
                        </g>;
                      }
                    }
    
                    const bottom = () => { //middle
    
                      //fecth from db
                      const status =0; //1 -fault
                      const id = sensorId + 1;
    
                      if (status) {
                        return <g>
                          <circle cx={commonX} cy={initialY + 2 * lineLength} r={radius} fill="red" />
                          <text x={commonX - 3} y={initialY + 2 * lineLength} stroke="black" stroke-width="2px" dy=".3em">{id}</text>
                        </g>;
                      } else {
                        return <g>
                          <circle cx={commonX} cy={initialY + 2 * lineLength} r={radius} fill="grey" />
                          <text x={commonX - 3} y={initialY + 2 * lineLength} stroke="black" stroke-width="2px" dy=".5em">{id}</text>
                          <text x={commonX +20} y={initialY + 2 * lineLength} stroke="grey" stroke-width="2px" dy=".5em">100% Water</text>
                        </g>;
                      }
                    }
    
                    return <g> {(top)()}
                      {(middle)()}
                      {(bottom)()} </g>;
    
    
                  })()
                }
    
            
    
              </svg>
              {sensorItems}
            </div>
            
        )
      }
    }
    //
    ShapesComponent.propTypes = {
      fetchSensors: PropTypes.func.isRequired,
      sensors: PropTypes.array.isRequired
    
    };
   
  const mapStateToProps = state => ({
      sensors: state.sensors.items
      });
  
  export default connect(mapStateToProps, { fetchSensors })(ShapesComponent);
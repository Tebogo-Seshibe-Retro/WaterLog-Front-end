import React from "react";

const commonX = 200;
const radius = 10;
const initialY = 20;
const lineLength = 60;

const sensorId = 4;


export default class StepperComponent extends React.Component {


  render() {
    return (
      <div>

        <button style={{ marginLeft: '150px' }}>ComponentHistory</button>
        <br />
        <div>
          <svg>
            {
              (() => {//main

                const top = () => { //top circle


                  const id = sensorId - 1;

                  if (id > 0) {

                    let _status = "go"; //1 -fault
                    //fecth from db
                    fetch(`https://localhost:44382/api/monitors/${id}`).then(
                      res => res.json()
                    ).then(sensor => {
                      _status = sensor.status
                      
                    })

                    console.log( _status)
                    if (_status === "normal") {

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
                    </g>;
                  } else {
                    return <g>
                      <line x1={commonX} y1={initialY + lineLength} x2={commonX} y2={initialY + 2 * lineLength} fill="grey" stroke="grey"></line>
                      <circle cx={commonX} cy={initialY + lineLength} r={radius} fill="grey" />
                      <text x={commonX - 3} y={initialY + lineLength} stroke="black" stroke-width="2px" dy=".3em">2</text>
                    </g>;
                  }
                }

                const bottom = () => { //middle

                  //fecth from db
                  const status = 1; //1 -fault
                  const id = sensorId + 1;

                  if (status) {
                    return <g>
                      <circle cx={commonX} cy={initialY + 2 * lineLength} r={radius} fill="red" />
                      <text x={commonX - 3} y={initialY + 2 * lineLength} stroke="black" stroke-width="2px" dy=".3em">{id}</text>
                    </g>;
                  } else {
                    return <g>
                      <circle cx={commonX} cy={initialY + 2 * lineLength} r={radius} fill="grey" />
                      <text x={commonX - 3} y={initialY + 2 * lineLength} stroke="black" stroke-width="2px" dy=".3em">2</text>
                    </g>;
                  }
                }

                return <g> {(top)()}
                  {(middle)()}
                  {(bottom)()} </g>;


              })()
            }


          </svg>
        </div>
        <br />

        <button style={{ marginLeft: '150px' }}>ResolveIssue</button>

      </div>

    )
  }
}
//export default StepperComponent;
/*

                  ()()


                  (() => { //bottom

                    //fecth from db
                    const status = 1; //1 -fault
                    const id = sensorId + 1;

                    if (status) {
                      return <g>
                        <circle cx={commonX} cy={initialY + lineLength} r={radius} fill="red" />
                        <text x={commonX - 3} y={initialY + lineLength} stroke="black" stroke-width="2px" dy=".3em">{id}</text>
                      </g>;
                    } else {
                      return <g>
                        <circle cx={commonX} cy={initialY + 2 * lineLength} r={radius} fill="grey" />
                        <text x={commonX - 3} y={initialY + 2 * lineLength} stroke="black" stroke-width="2px" dy=".3em">{id}</text>
                      </g>;
                    }
                  })()
*/
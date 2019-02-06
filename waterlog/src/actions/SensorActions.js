import {FETCH_SENSORS} from "./types";
 
  export const fetchSensors = () => dispatch => { 
    fetch('http://api.iot.retrotest.co.za/api/monitors')
      .then(res => res.json())
      .then(sensors =>
        dispatch({
          type: FETCH_SENSORS,
          payload: sensors
        })
      );
  };



<<<<<<< HEAD
import {FETCH_SEGMENT_LEAKS} from "./types";
 
  export const fetchSegmentLeaks = () => dispatch => { 
    fetch('https://localhost:44382/api/segmentleaks') //TO BE REPLACED WITH THE LIVE API
      .then(res => res.json())
      .then(segment_leaks =>
        dispatch({
          type: FETCH_SEGMENT_LEAKS,
          payload: segment_leaks
        })
      );
  };


=======
import { FETCH_SEGMENTS_LEAKS } from "./types";

export const fetchSegmentsLeaks = () => dispatch => {
  console.log("please");
  fetch('https://localhost:44382/api/segmentleaks')//Change to use either localhost/server
    .then(res => res.json())
    .then(leaks =>
      dispatch({
        type: FETCH_SEGMENTS_LEAKS,
        payload: leaks
      })
    );
};
>>>>>>> Dev

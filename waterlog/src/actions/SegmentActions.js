import { FETCH_SEGMENTS } from "./types";

export const fetchSegments = () => dispatch => {
  fetch('https://localhost:44382/api/segments')//Change to use either localhost/server
    .then(res => res.json())
    .then(segments => {
      return dispatch({
        type: FETCH_SEGMENTS,
        payload: segments
      });
    })
    .catch(function () {
      console.log("error");
    });
};
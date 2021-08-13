import axios from "axios";
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const ADD_ERROR = "ADD_ERROR";

export const CallAction = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((response) => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data.results });
    })
    .catch((error) => {
      dispatch({ type: FETCH_SMURF_FAIL, payload: error });
    });
};
export const AddError = (error) => ({ type: ADD_ERROR, payload: error });
export const AddSmurf = (state) => ({ type: ADD_SMURF_START, payload: state });
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

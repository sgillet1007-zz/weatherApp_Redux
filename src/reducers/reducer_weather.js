import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action){
  // console.log('Action received', action);
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.payload.data]); //concat return a new instance of state
    return [action.payload.data, ...state]; // ES6 syntax but adds data to front of new instance array
  }
  return state;
}

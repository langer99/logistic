const GET_SENSOR = 'GET_SENSOR';
const UPDATE_SENSOR = 'UPDATE_SENSOR';
const initialState = {
    sensor: {},
  };
const sensorReducer = (state = initialState, action) => {
    console.log("action.payload",action.type)
  switch (action.type) {
    case GET_SENSOR:
      return state.sensor; // Return the current sensor
    case UPDATE_SENSOR:
        console.log("UPDATE_SENSOR")
      return {...state, sensor:action.payload }; // Merge payload with current sensor
    default:
      return state;
  }
};

export default sensorReducer;
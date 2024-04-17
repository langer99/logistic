
const GET_SENSOR = 'GET_SENSOR';
const UPDATE_SENSOR = 'UPDATE_SENSOR';
export const getsensor = () => ({
    type: GET_SENSOR,
  });
  
  export const updatesensor = (data) => ({
    type: UPDATE_SENSOR,
    payload: data,
  });
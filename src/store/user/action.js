// store/actions/index.js

 
  export const setUserRulesData = (data) => {
    return {
      type: 'SET_USER_DATA',
      payload: data,
    };
  };
  export const setUserData = (data) => {
    return {
      type: 'SET_USER_INFO',
      payload: data,
    };
  };
  export const setUserALLDATa = (data) => {
    return {
      type: 'SET_USER_All_Data',
      payload: data,
    };
  };
  
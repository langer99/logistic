// store/reducers/UserInfoReducer.js

const initialState = {
  userData: [],
  userInfo: {},
  allData: {}
};

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'SET_USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'SET_USER_All_Data':
      return {
        ...state,
        allData: action.payload,
      };

    default:
      return state;
  }
};

export default UserInfoReducer;

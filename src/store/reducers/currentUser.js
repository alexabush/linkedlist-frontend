import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {}
};

export default (state = DEFAULT_STATE, action) => {
  console.log('in currentUser reducer');
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // turn an empty object into false or an object with keys to be true

        //!! turns suffix into boolean
        /*
doing the isAuth here lets us just check this property whenever we want throughout our code (more convenient)
        */
        isAuthenticated: !!Object.keys(action.user).length,
        //user data
        user: action.user
      };
    default:
      return state;
  }
};

import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
  isAuthenticated: false,
  //make this into an fully fleshed out empty user object with all property
  user: {}
};

export default (state = DEFAULT_STATE, action) => {
  console.log('in currentUser reducer');
  // debugger;
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // turn an empty object into false or an object with keys to be true

        //!! turns suffix into boolean
        /*
doing the isAuth here lets us just check this property whenever we want throughout our code (more convenient)
        */
        // isAuthenticated: !!Object.keys(action.user).length,
        isAuthenticated: Object.keys(action.user).length > 0,
        //user data
        user: action.user
      };
    default:
      return state;
  }
};

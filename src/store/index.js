import rootReducer from '../store/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

/*
configure store is just a wrapper so we can call all this logic in another file
*/
export function configureStore() {
  console.log('in configureStore');
  debugger;
  const store = createStore(
    rootReducer,
    //compose allows us to join together multiple pieces of middleware
    compose(
      //allows our action creators to dispatch
      /*
      We'll wrap final dispatch that we need in a function
      */
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}

import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import Navbar from './Navbar';
import Main from './Main';
import jwtDecode from 'jwt-decode';

const store = configureStore();
console.log('called configure store');
/*
if you refresh the page and there's a token, lets do some stuff

"hydration" -> we recheck if there's a token when the page reloads
so we don't make the user log in again if they just refresh or something
*/
if (localStorage.jwtToken) {
  console.log('in refresher');
  //tamper-proof testing
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually setting a key of 'jwtToken' in localStorage
  try {
    //get the payload from our json token
    //payloads are NOT secure, but that's fine
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;

import axios from 'axios';

/* This function simply adds a header of Authorization with a value of Bearer + 
the token that has been set. This is very useful for authenticated requests so that 
we don't have to attach the token each time we make a request manually.

If there is a falsey value passed to this function, we delete the header on every future request.
This happens when we log out
*/

/*
if truthy value, set header of authorization to be `Bearer ${token}`;
we could do this manually in our code, but it'd be inefficient

when they logout, we can use the same function to delete the header
*/
export function setTokenHeader(token) {
  console.log('in setTokenHeader');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

/**
 * A wrapper around axios API call that formats errors, etc
 * @param {string} method the HTTP verb you want to use
 * @param {string} path the route path / endpoint
 * @param {object} data (optional) data in JSON form for POST requests
 */

/*
generic wrapper function for making an axios request
allows us to pass in our method, our url, and whatever additional data we may need

gives back a friendlier positive response and a friendlier error message
*/

export async function apiCall(method, path, data) {
  console.log('in apiCall');
  try {
    let res = await axios[method](path);
    debugger;
    return res.data;
  } catch (err) {
    return Promise.reject(err.response.data.error);
  }
}

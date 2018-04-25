import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export const addError = error => ({
  type: ADD_ERROR,
  // type: 'ADD_ERROR',
  error
});

export const removeError = () => ({
  type: REMOVE_ERROR
  // type: 'REMOVE_ERROR'
});

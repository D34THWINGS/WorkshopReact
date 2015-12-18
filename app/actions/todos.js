import {CALL_API} from 'redux-api-middleware';

export const FETCH_TODOS_START = Symbol('FETCH_TODOS_START');
export const FETCH_TODOS_ERROR = Symbol('FETCH_TODOS_ERROR');
export const FETCH_TODOS_SUCCESS = Symbol('FETCH_TODOS_SUCCESS');

export function fetchTodos() {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:8080/lists',
      method: 'GET',
      types: [FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR]
    }
  };
}

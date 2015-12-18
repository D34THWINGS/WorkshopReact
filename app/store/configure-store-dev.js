import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';

import {rootReducer} from '../reducers';
import {DevTools} from '../containers/dev-tools';

const finalCreateStore = compose(
  applyMiddleware(thunk, apiMiddleware),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}

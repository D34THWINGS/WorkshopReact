import Immutable from 'immutable';

import {FETCH_TODOS_SUCCESS} from '../actions/todos';

const defaultState = Immutable.fromJS({
  lists: []
});

export default function counter(state = defaultState, action = {}) {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return state.set('lists', Immutable.fromJS(action.payload));
    default:
      return state;
  }
}

import {createStore, combineReducers, applyMiddleware} from 'redux';
// Importujemy akcje
import * as Actions from './actions.js';

//5/ Reducery zapisujemy w ten sposób
const tasks = createReducer([], {
  [Actions.increment](state, action) {
    return [...state, `New task no ${state.length + 1}`];
  }
});

//8/ ... każda obsługiwana akcja to osobna funkcja
const count = createReducer(3, {

  [Actions.increment](state) {
    return state + 1;
  },

  [Actions.decrement](state) {
    return state - 1;
  }

})

const reducer = combineReducers({
  tasks: tasks,
  count
});

export default applyMiddleware(
  (store) => (next) => (action) => {
    console.log(store.getState(), action);
    next(action);
  }
)(createStore)(reducer);

//8/ Ta pomocnicza funkcja pozwola nam tworzyć reducery.
function createReducer(initialState, clazz) {
  return function reducer(state = initialState, action) {
    if (clazz[action.type]) {
      return clazz[action.type](state, action);
    }
    return state;
  };
}

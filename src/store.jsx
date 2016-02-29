// combineReducers pozwala podzielić stan na części
import {createStore, combineReducers, applyMiddleware} from 'redux';

//4/ Dzielimy stan na niezależne części i ich obsługą zajmują się dwie funkcje
const reducer = combineReducers({
  tasks: tasks,
  count
});

//6/ Dodajemy middleware - miejsce przez które przechodzi każda akcja
export default applyMiddleware(
  (store) => (next) => (action) => {
    console.log(store.getState(), action);
    next(action);
  }
)(createStore)(reducer);

//8/ Za każdym razem, kiedy inkrementujemy zmienną dodajemy też jednego taska
function tasks(state = [], action) {
  switch (action.type) {
    case 'INC':
      return [...state, `New task no ${state.length + 1}`];
    default:
      return state;
  }
}

function count(state = 3, action) {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

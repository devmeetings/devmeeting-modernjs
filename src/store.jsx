
// Sercem reduxowej architektury jest store
import {createStore} from 'redux';

//8/ Ta funkcja bierze aktualny stan i dla danej akcji zwraca nowy
function counter(state = 0, action) {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

// Eksportujemy stan na zewnątrz
export default createStore(counter);

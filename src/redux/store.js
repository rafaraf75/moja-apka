import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_COLUMN') {
    // nowy stan = wszystko jak było + nowa kolumna z action.newColumn
    return { ...state, columns: [...state.columns, action.newColumn] };
  }
  if (action.type === 'UPDATE_SEARCHSTRING') {
    return { ...state, searchString: action.payload };
  }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
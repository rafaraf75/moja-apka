import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [
          ...state.columns,
          { id: shortid(), ...action.newColumn }
        ],
      };

    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          { id: shortid(), columnId: action.columnId, title: action.title }
        ],
      };

      case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
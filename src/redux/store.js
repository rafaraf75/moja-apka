import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

// ---------- SELECTORS ----------
export const getAllColumns = state => state.columns;

export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(card =>
    card.columnId === columnId && strContains(card.title, searchString)
  );

// ---------- ACTION CREATORS ----------
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload }); // { title, columnId }
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

// ---------- REDUCER ----------
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COLUMN': {
      const { title, icon } = action.payload;
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), title, icon }],
      };
    }

    case 'ADD_CARD': {
      const { title, columnId } = action.payload;
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), title, columnId }],
      };
    }

    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };

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
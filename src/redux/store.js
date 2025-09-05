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

export const getListById = ({ lists }, listId) =>
 lists.find(list => String(list.id) === String(listId));

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter(col => String(col.listId) === String(listId));

export const getAllLists = state => state.lists;

// ---------- ACTION CREATORS ----------
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });

// ---------- REDUCER ----------
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COLUMN': {
      const { title, icon, listId } = action.payload;
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), title, icon, listId }],
      };
    }

    case 'ADD_CARD': {
      const { title, columnId } = action.payload;
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), title, columnId }],
      };
    }

    case 'ADD_LIST': {
      const { title, description } = action.payload;
      return {
        ...state,
        lists: [...state.lists, { id: shortid(), title, description }],
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
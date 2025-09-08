import { createStore, combineReducers } from 'redux';
import initialState from './initialState';

// subreducery z osobnych plików
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

// re-eksporty (żeby nie zmieniać importów w komponentach)
export { addList, getListById, getAllLists } from './listsRedux';
export { addColumn, getAllColumns, getColumnsByList } from './columnsRedux';
export { addCard, toggleCardFavorite, removeCard, makeGetFilteredCards, getFavoriteCards } from './cardsRedux';
export { updateSearchString } from './searchStringRedux';

// --- root reducer ---
const reducer = combineReducers({
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
});

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

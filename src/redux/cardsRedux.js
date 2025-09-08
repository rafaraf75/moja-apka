// src/redux/cardsRedux.js
import shortid from 'shortid';
import { createSelector } from 'reselect';
import strContains from '../utils/strContains';

/* selectors */
// Fabryka selektora zależna od columnId — tworzymy instancję w komponencie Column
export const makeGetFilteredCards = (columnId) =>
  createSelector(
    [(state) => state.cards, (state) => state.searchString],
    (cards, searchString) =>
      cards.filter(
        (c) => c.columnId === columnId && strContains(c.title, searchString)
      )
  );

// Ulubione — może być jeden wspólny selektor memoizowany
export const getFavoriteCards = createSelector(
  [(state) => state.cards],
  (cards) => cards.filter((c) => c.isFavorite === true)
);

/* action types */
const createActionName = (name) => `app/cards/${name}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

/* action creators */
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = (cardId) => ({ type: TOGGLE_CARD_FAVORITE, payload: cardId });
export const removeCard = (cardId) => ({ type: REMOVE_CARD, payload: cardId });

/* reducer */
const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD: {
      const { title, columnId } = action.payload;
      return [...statePart, { id: shortid(), title, columnId, isFavorite: false }];
    }
    case TOGGLE_CARD_FAVORITE: {
      const id = action.payload;
      return statePart.map((card) =>
        card.id === id ? { ...card, isFavorite: !(card.isFavorite ?? false) } : card
      );
    }
    case REMOVE_CARD: {
      const id = action.payload;
      return statePart.filter((card) => card.id !== id);
    }
    default:
      return statePart;
  }
};

export default cardsReducer;
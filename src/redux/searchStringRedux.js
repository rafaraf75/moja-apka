/* selector (opcjonalny, przyda się kiedyś) */
export const getSearchString = (state) => state.searchString;

/* action types */
const createActionName = (name) => `app/search/${name}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

/* action creators */
export const updateSearchString = (payload) => ({ type: UPDATE_SEARCHSTRING, payload });

/* reducer */
const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
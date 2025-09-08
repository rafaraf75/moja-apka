import shortid from 'shortid';

/* selectors */
export const getListById = ({ lists }, listId) =>
  lists.find(list => String(list.id) === String(listId));
export const getAllLists = state => state.lists;

/* action types */
const createActionName = (name) => `app/lists/${name}`;
const ADD_LIST = createActionName('ADD_LIST');

/* action creators */
export const addList = (payload) => ({ type: ADD_LIST, payload });

/* reducer */
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST: {
      const { title, description } = action.payload;
      return [...statePart, { id: shortid(), title, description }];
    }
    default:
      return statePart;
  }
};

export default listsReducer;
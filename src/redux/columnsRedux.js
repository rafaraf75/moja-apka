import shortid from 'shortid';

/* selectors */
export const getAllColumns = state => state.columns;
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter(col => String(col.listId) === String(listId));

/* action types */
const createActionName = name => `app/columns/${name}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

/* action creators */
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

/* reducer */
const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN: {
      const { title, icon, listId } = action.payload;
      return [...statePart, { id: shortid(), title, icon, listId }];
    }
    default:
      return statePart;
  }
};

export default columnsReducer;
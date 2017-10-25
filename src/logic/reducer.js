import { ADD_ITEM } from './constants';
import { REMOVE_ITEM } from './constants';
import { TOGGLE_ITEM_STATUS } from './constants';
import { SET_LIST_FILTER } from './constants';
import { FILTERS } from './constants';

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: true },
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: true },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      }

    case TOGGLE_ITEM_STATUS:
//TODO: update and return newState
      let newState = [];
      state.items.filter(item => item.id === action.id)
      .map(matchedItem => matchedItem.completed = !matchedItem.completed);
      return {
        ...state,
        items: [...state.items]
      }

      case REMOVE_ITEM:
// TODO: test and replace with below
//  const newState = state.items.filter(item => {
//    return item.id !== action.id
//  }

//  return {
//    ...state,
//    items: [...newstate.items]
//  }  
       state.items.filter(item => item.id === action.id)
      .map((matchedItem, index) => state.items.splice(index, 1));
      return {
        ...state,
        items: [...state.items]
      }

     default:
      return state;
  }
};

export default reducer;

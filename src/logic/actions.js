import { ADD_ITEM } from './constants';
import { REMOVE_ITEM } from './constants';
import { TOGGLE_ITEM_STATUS } from './constants';
import { SET_LIST_FILTER } from './constants';
import { FILTERS } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const removeItem = id => {
  return { type: REMOVE_ITEM, id };
};

export const toggleItemStatus = id => {
  return { type: TOGGLE_ITEM_STATUS, id };
};

export const setListFilter = content => {
  return { type: SET_LIST_FILTER, content };
};
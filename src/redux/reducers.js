import { combineReducers } from 'redux';
import reducer from '../logic/reducer';
import listFilter from '../logic/listFilter';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
    listFilter: listFilter
  });
}

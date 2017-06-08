import { combineReducers } from 'redux';
import LibaryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibaryReducer,
  selectLibraryID: SelectionReducer
});

// console.log(store.getState());
// { libraries: [] }

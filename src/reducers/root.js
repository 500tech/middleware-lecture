import { combineReducers } from 'redux';
import authors from './authors';
import books from './books';
import ui from './ui';

export default combineReducers({
  authors,
  books,
  ui
});
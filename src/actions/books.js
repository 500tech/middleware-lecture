import * as actions from 'consts/action-types';

export const setBooks = (payload) => ({
  type: actions.SET_BOOKS,
  payload
});

export const fetchBooks = () => (dispatch) => {
  fetch('api/books.json')
    .then(response => response.json())
    .then(data => dispatch(setBooks(data)));
};
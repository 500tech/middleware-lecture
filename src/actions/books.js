import * as actions from 'consts/action-types';
import { setAuthors } from './authors';
import * as schema from 'lib/schema';

export const setBooks = (payload) => ({
  type: actions.SET_BOOKS,
  payload
});

export const fetchBooks2 = () => (dispatch) => {
  fetch('api/books.json')
    .then(response => response.json())
    .then(data => dispatch(setBooks(data)));
};

export const fetchBooks = () => ({
  type: actions.API,
  payload: {
    url: 'api/books.json',
    schema: [schema.books],
    success: ({ entities }) => [
      setAuthors(entities.authors),
      setBooks(entities.books)
    ],
    label: 'books'
  }
});

export const updateBook = (id, newName) => ({
  type: actions.API,
  payload: {
    url: `api/books/${ id }`,
    method: 'PUT',
    data: {
      name: newName
    }
  }
});
import { schema } from 'normalizr';

export const authors = new schema.Entity('authors');
export const books = new schema.Entity('books', { author: authors });

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks } from 'actions/books';
import PanelTitle from './common/PanelTitle';
import Book from './Book';
import List from 'components/common/List';

const Books = ({ books, fetchBooks }) => (
  <div>
    <PanelTitle title="Books" callback={ fetchBooks } />

    <List list={ books }
          render={ item => <Book key={ item.id } book={ item } /> }
    />
  </div>
);

Books.propTypes = {
  books: PropTypes.array,
  fetchBooks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps, { fetchBooks })(Books);
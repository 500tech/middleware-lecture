import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks } from 'actions/books';
import PanelTitle from './common/PanelTitle';
import Book from './Book';
import List from 'components/common/List';
import { getRequests } from 'reducers/ui';

const Books = ({ books, fetchBooks, pending  }) => (
  <div>
    <PanelTitle title="Books" callback={ fetchBooks } />

    <List list={ books }
          pending={ pending }
          render={ item => <Book key={ item.id } book={ item } /> }
    />
  </div>
);

Books.propTypes = {
  books: PropTypes.array,
  fetchBooks: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  books: Object.keys(state.books).map(id => state.books[id]),
  pending: getRequests(state, 'books') > 0
});

export default connect(mapStateToProps, { fetchBooks })(Books);
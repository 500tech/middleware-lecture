import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = ({ book, author }) => (
  <li>
    { book.title }
    <div className="author">{ author.name }</div>
  </li>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  author: state.authors[ownProps.book.author]
});

export default connect(mapStateToProps)(Book);
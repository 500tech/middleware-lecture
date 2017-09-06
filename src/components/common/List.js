import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const List = ({ list, render, pending = false }) => {
  if (pending) {
    return <Spinner />
  }

  return (
    <ul>
      {
        list && list.length > 0
          ? list.map(render)
          : <li className="empty">No items</li>
      }
    </ul>
  )
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  pending: PropTypes.bool
};

export default List;
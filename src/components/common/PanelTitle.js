import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getColor } from 'reducers/ui';

const PanelTitle = ({ title, callback, color }) => (
  <div className="title" style={ { backgroundColor: color } }>
    { title }
    {
     callback
       ? <button onClick={ callback }>reload</button>
       : null
    }
  </div>
);

PanelTitle.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func,
  color: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  color: getColor(state)
});

export default connect(mapStateToProps)(PanelTitle);
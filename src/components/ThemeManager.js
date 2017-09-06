import React from 'react';
import PropTypes from 'prop-types';
import { switchTheme } from 'actions/ui';
import { connect } from 'react-redux';

const ThemeManager = ({ switchTheme }) => (
  <div className='theme'>
    <button onClick={ switchTheme }>Switch Theme</button>
  </div>
);

ThemeManager.propTypes = {
  switchTheme: PropTypes.func.isRequired
};

export default connect(null, { switchTheme })(ThemeManager);
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAuthors } from 'actions/authors';
import PanelTitle from './common/PanelTitle';
import List from 'components/common/List';

const Authors = ({ authors, fetchAuthors }) => (
  <div>
    <PanelTitle title="Authors" callback={ fetchAuthors } />

    <List list={ authors }
          render={ item => <li key={ item.id }>{ item.name }</li> }
    />
  </div>
);

Authors.propTypes = {
  authors: PropTypes.array,
  fetchAuthors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authors: state.authors
});

export default connect(mapStateToProps, { fetchAuthors })(Authors);
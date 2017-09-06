import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAuthors } from 'actions/authors';
import PanelTitle from './common/PanelTitle';
import List from 'components/common/List';
import { getRequests } from 'reducers/ui';

const Authors = ({ authors, fetchAuthors, pending }) => (
  <div>
    <PanelTitle title="Authors" callback={ fetchAuthors } />

    <List list={ authors }
          pending={ pending }
          render={ item => <li key={ item.id }>{ item.name }</li> }
    />
  </div>
);

Authors.propTypes = {
  authors: PropTypes.array,
  fetchAuthors: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  authors: Object.keys(state.authors).map(id => state.authors[id]),
  pending: getRequests(state, 'authors') > 0
});

export default connect(mapStateToProps, { fetchAuthors })(Authors);
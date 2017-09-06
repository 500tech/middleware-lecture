import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import { Provider } from 'react-redux';
import store from 'store';
import 'mimic';

import App from 'components/App';

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);

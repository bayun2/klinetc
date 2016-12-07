import './index.less';

import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';

const middleware = [thunk];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('J-activity')
)

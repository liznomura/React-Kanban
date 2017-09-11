import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import './styles.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import kanbanReducer from './reducers';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
const store = createStore(
  kanbanReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

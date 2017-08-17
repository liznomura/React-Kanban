import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import './styles.css';

import kanbanReducer from './reducers';

import { createStore } from 'redux';
const store = createStore(kanbanReducer);

render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
  );

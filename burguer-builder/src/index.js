import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import reducer from './store/reducer'
import './index.css';

const store = createStore(reducer)

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();

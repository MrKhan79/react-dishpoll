import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import allReducers from './reducers/middleware';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

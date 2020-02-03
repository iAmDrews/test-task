import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './styles/fonts.css';
import './styles/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { dispatchContainerReducer } from './store/dispatchContainer/reducers';

const store = createStore(dispatchContainerReducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

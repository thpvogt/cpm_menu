import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './config/store';
import { FormPage } from './pages/Form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={FormPage} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

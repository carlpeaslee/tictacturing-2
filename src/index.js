import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './containers';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



ReactDOM.render(
  <Provider store={store}><App/></Provider>
  ,
  document.getElementById('root')
);

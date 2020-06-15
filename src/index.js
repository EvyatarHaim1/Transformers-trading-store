import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {UsersStore} from './stores/UsersStore';
import {ProductsStore} from './stores/ProductsStore';
import { Provider } from 'mobx-react';
import App from './App';
import * as serviceWorker from './serviceWorker';

let us = new UsersStore();
let ps = new ProductsStore();
let stores={us, ps}
ReactDOM.render(<Provider {...stores}>
  <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


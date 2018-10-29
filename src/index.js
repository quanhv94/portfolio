import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css'
import 'font-awesome/css/font-awesome.min.css';
import 'react-tippy/dist/tippy.css';
import * as serviceWorker from './serviceWorker';
import mobile from 'is-mobile';
window.mobile = mobile
if (mobile()) {
  let width = document.documentElement.clientWidth * window.devicePixelRatio;
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'width=' +width+ ', minimum-scale: 1');
  document.body.classList.add('mobile');
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

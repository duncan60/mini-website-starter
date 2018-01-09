import 'babel-polyfill';
import 'normalize.css';
import '../scss/index.scss';
import message from './message';

$(document).ready(() => {
  console.log(message);
  console.log('document ready');
});

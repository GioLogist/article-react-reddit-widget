import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Find all widget divs
const WidgetDivs = document.querySelectorAll('.reddit_widget')

// Inject our React App into each
WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    Div
  );
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

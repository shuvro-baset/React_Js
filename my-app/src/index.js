/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/


// ---------- custom component ------ 
import React from 'react';
import ReactDOM from 'react-dom';
// when I wanna add react component 
import App from "./App";
ReactDOM.render(<App/>, document.getElementById('root'));


/*
let el = React.createElement('h1', null, "Hello world from react element.");
ReactDOM.render(el, document.getElementById('root'));
*/


/* jsx format
let el = <h1>Hello world from babel js.</h1>; 
ReactDOM.render(el, document.getElementById('root'))

*/
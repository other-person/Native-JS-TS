import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {sum} from "./03-function/03";
import {User} from "./06-сallBack/06-callbacks";

// let a = sum;


// const sentence = "Hello my friend!";
// const result = SplitInToWords(sentence);
// console.log(result[0]=="Hello");
// console.log(result[1]=="my");
// console.log(result[2]=="friend!");



ReactDOM.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

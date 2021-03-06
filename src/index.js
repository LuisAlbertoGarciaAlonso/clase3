import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import reportWebVitals from './reportWebVitals';
import ItemCount from "../src/ItemCount/ItemCount"



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ItemListContainer greeting = "bienvenidos!"/>
    <ItemCount/>
  </React.StrictMode>,
  document.getElementById('root')
);







//ReactDOM.render(elemento de react, elemntod donde se va a renderirar del html)
/* este es el elemento de react

<React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root') //este es el elemnto del html
*/






















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

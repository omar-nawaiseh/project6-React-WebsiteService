import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Team_card from './Componants/Team_card';
import Youtube from './Componants/youtube';
import './Css/youtube.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Youtube />
    <Team_card />



    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

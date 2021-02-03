import React, { Component } from 'react'
 import '../Css/Team_card.css';


function Person(props) {
  return (
    <div>
    <div className="container ">
<div>
<div className="card">
<div className="card__image-container">
  <img className="card__image" key={props.key} src={props.image} alt="" />
</div>
<svg className="card__svg" viewBox="0 0 800 500">
  <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
  <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth={3} fill="transparent" />
</svg>
<div className="card__content">
  <h1 className="card__title">{props.name}</h1>
  <p>{props.summary}</p>
</div>
</div>
</div>
</div> 
</div>
  );
} 
export default Person;
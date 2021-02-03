import React, { Component } from 'react'
import '../Css/Team_card.css';


export default class Team_card extends Component {
    render() {
        return ( 
            <div>
                <div className="container">
        <div>
          <div className="card">
            <div className="card__image-container">
              <img className="card__image" src="https://media-exp1.licdn.com/dms/image/C4D03AQHl_SDapqPmIQ/profile-displayphoto-shrink_800_800/0/1606520032060?e=1617840000&v=beta&t=ES_BmfnkaQOlxckDfrhoiv9sTKO6us9RExLSgSHOrUY" alt="" />
            </div>
            <svg className="card__svg" viewBox="0 0 800 500">
              <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
              <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth={3} fill="transparent" />
            </svg>
            <div className="card__content">
              <h1 className="card__title">Roa'a abu-shaqrah</h1>
              <p>Lorem ipsum dolos,</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card__image-container">
              <img className="card__image" src="https://media-exp1.licdn.com/dms/image/C5603AQFFXBi-puYdKg/profile-displayphoto-shrink_800_800/0/1600854238228?e=1617840000&v=beta&t=0Th2G1aQxNl39YbgJtCkjbnzENgZYpYwVqIgvL0v-LQ" alt="" />
            </div>
            <svg className="card__svg" viewBox="0 0 800 500">
              <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
              <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth={3} fill="transparent" />
            </svg>
            <div className="card__content">
              <h1 className="card__title">Sadi Ashlaq</h1>
              <p>Lorem ipsumro.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card__image-container">
              <img className="card__image" src="https://media-exp1.licdn.com/dms/image/C4D03AQHdbVjKN24aOA/profile-displayphoto-shrink_800_800/0/1600866731777?e=1617840000&v=beta&t=d_8gRA-ZRs222R0lZyGbKSuSVWOMNJ7yGmTigoOesIc" alt="" />
            </div>
            <svg className="card__svg" viewBox="0 0 800 500">
              <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
              <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth={3} fill="transparent" />
            </svg>
            <div className="card__content">
              <h1 className="card__title">Hamzeh Obeidat</h1>
              <p>Lorem ipsum rro.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card__image-container">
              <img className="card__image" src="https://pbs.twimg.com/profile_images/1331191909851787264/RdnQUb5r_400x400.jpg" alt="" />
            </div>
            <svg className="card__svg" viewBox="0 0 800 500">
              <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
              <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth={3} fill="transparent" />
            </svg>
            <div className="card__content">
              <h1 className="card__title">Omar Nawaiseh</h1>
              <p>Lota dolor nt porro.</p>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

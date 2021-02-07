import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Youtube from './Componants/youtube';
import './Css/youtube.css';
import reportWebVitals from './reportWebVitals';
import Header from './Componants/header';
import Footer from './Componants/footer';

import Slider from './Componants/slider';

import CardInformation from './Componants/Team_card';

import Team from './Componants/Team';

import Testimonials from './Componants/testimonials';

function Cards() {
  

  const InfUser = Team.map(x => <CardInformation name={x.name} image={x.image} specialty={x.specialty} summary={x.summary} />)

  return (

    <div className="container">
      
      {InfUser}
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <Youtube />

    <Cards />

    <Testimonials />

    <Footer />


    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

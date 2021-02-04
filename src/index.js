import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Youtube from './Componants/youtube';
import './Css/youtube.css';
import reportWebVitals from './reportWebVitals';
import Header from './Componants/header';
import Footer from './Componants/footer';
import Slider from './Componants/slider';
import CardInformation from './Componants/Team_card'
import Team from './Componants/Team';
import Product from './Componants/Product';



const InfUser = Team.map(x => <CardInformation name={x.name} image={x.image} specialty={x.specialty} summary={x.summary} />)


function Cards() {
  return (
    <div className="contener">
      {InfUser}
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <Youtube />
    {/* <Cards /> */}
    <Product />
    <Footer />


    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

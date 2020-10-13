import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css'
import './styles/pages/landing.css'

import logoImg from './images/logo.svg'

/* interface TitleProps {
  text: string;
  textOptitonal?: string;
}

function Title(props: TitleProps){
  return(
    <>
      <h1>{props.text}</h1>
      <h3>{props.textOptitonal}</h3>
    </>
  )
} */

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;

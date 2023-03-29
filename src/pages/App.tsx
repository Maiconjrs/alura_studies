import React from 'react';
import  style from './App.module.scss'
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Cronometro from '../components/cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
        <Formulario/>
        <Lista/>
        <Cronometro/>
    </div>
  );
}

export default App;

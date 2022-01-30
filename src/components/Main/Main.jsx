import React from 'react';
import About from './About';
import Destinations from './Destinations';
import style from './Main.module.css'

const Main = () => {
  return <div className={style.main}>
      <About/>
      <Destinations/>
        
  </div>;
};

export default Main;

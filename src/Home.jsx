import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import style from './Home.module.css'

const Home = () => {
  return <div className={style.home}>
      <Header/>
      <Main/>
      <Footer/>
  </div>;
};

export default Home;

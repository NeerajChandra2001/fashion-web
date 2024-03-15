import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero.jsx/Hero';
import Editors from './Components/Editors.jsx/Editors';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Section from './Components/Section/Section';
import Readmore from './Components/ReadMore/Readmore';
import Featured from './Components/Featured/Featured';
import Card from './Components/Card/Card';


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <div className=' font-Montserrat'>
      <Header />
      <Navbar />
      <Hero />
      <Editors />
      <Section />
      <Readmore />
      <Featured />
    </div>
  );
}

export default App;

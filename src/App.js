import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Text from './components/Text';
import Location from './components/location';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Text />
      <Location />
      <Contactus />
      <Footer />
  
    </div>
  );
};

export default App;
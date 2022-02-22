import React from 'react';
import About from './components/about';
import Background from "./components/background";
import Jumbo from './components/jumbo';
import SkillSet from './components/skillset';
import "./styles/main.scss";
import Footer from './components/footer';
import Header from './components/header';

const App = () => {
  return (
    <div className="App">
    <Background/>
    <Header />
    <Jumbo />
    <About />
    <SkillSet />    
    <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import About from './components/about';
import Background from "./components/background";
import Projects from './components/projects';
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
    <Projects />
    <Footer />
    </div>
  );
}

export default App;

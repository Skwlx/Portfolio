import React from 'react';
import About from './components/about';
import Background from "./components/background";
import Projects from './components/projects';
import Jumbo from './components/jumbo';
import SkillSet from './components/skillset';
import "./styles/main.scss";
import Footer from './components/footer';

const App = () => {
  return (
    <div className="App">
    <Background/>
    <Jumbo />
    <About />
    <SkillSet />
    <Projects />
    <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import About from './components/about';
import Background from "./components/background";
import Projects from './components/projects';
import Jumbo from './components/jumbo';
import SkillSet from './components/skillset';
import "./styles/main.scss";

const App = () => {
  return (
    <div className="App">
    <Background/>
    <Jumbo />
    <About />
    <SkillSet />
    <Projects />
    </div>
  );
}

export default App;

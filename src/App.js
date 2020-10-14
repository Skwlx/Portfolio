import React from 'react';
import About from './components/about';
import Background from "./components/background";
import Jumbo from './components/jumbo';
import SkillSet from './components/skillset';
import "./styles/main.scss";

const App = () => {
  return (
    <div className="App">
    <Background/>
    <Jumbo />
    <SkillSet />
    <About />
    </div>
  );
}

export default App;

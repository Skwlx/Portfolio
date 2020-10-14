import React from 'react';
import About from './components/about';
import Background from "./components/background";
import Jumbo from './components/jumbo';
import "./styles/main.scss";

const App = () => {
  return (
    <div className="App">
    <Background/>
    <Jumbo />
    <About />
    </div>
  );
}

export default App;

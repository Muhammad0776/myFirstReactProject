import React from 'react'
import './App.css';
import Navbar from '../Navbar/Navbar';
import Counter from '../Counter/Counter';
import Section from '../Section/Section';
import Section02 from '../Section02/Section02'
import About from "../About/About"
import Pricing from "../Pricing/Pricing"
import Touch from "../Touch/Touch"



class App extends React.Component {
  render() {
    return <div className="App">
      <Navbar />   {/* <Header></Header> - bu usulda ham ishlayveradi */}
      <Counter />
      <Section />
      <Section02 />
      <About />
      <Pricing />
      <Touch />
    </div>
  }
}

export default App;

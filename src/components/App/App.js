import React from 'react'
import './App.css';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';



class App extends React.Component {
  render() {
    return <div className="App">
      <Header />   {/* <Header></Header> - bu usulda ham ishlayveradi */}
      <Counter />
    </div>
  }
}

export default App;

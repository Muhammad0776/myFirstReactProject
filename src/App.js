import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="shadow">
        <div className="container d-flex align-items-center">
          <img src={logo} className="" alt="logo" />
          <p>
            React App
          </p>
          <p>Bugun 08.07.2021 sanada react darsimizani boshladik.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

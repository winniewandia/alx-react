import './App.css';
import logo from './holberton_logo.jpeg';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <header>
          <img src={logo} alt='' />
          <h1>School dashboard</h1>
        </header>
      </div>
      <div className='line-div'></div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='line-div'></div>
      <div className='App-footer'>
        <footer>
          <p>Copyright 2020 - holberton School</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

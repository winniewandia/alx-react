import './App.css';
import logo from './holberton_logo.jpeg';
import { getFullYear, getFooterCopy } from './utils';

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
        <label htmlFor='email' className='email'>Email:</label>
        <input type='email' className='emailInput' />

        <label htmlFor='password' className='password'>Password:</label>
        <input type='password' className='passwordInput' />

        <button>OK</button>
      </div>
      <div className='line-div'></div>
      <div className='App-footer'>
        <footer>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

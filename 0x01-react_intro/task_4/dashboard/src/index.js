import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notification from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <div className='root-notifications'>
      <Notification />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
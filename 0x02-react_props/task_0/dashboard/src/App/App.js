import React from 'react';
import './App.css';
import logo from '../assets/holberton_logo.jpeg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <>
    <Notifications />
    <div className="App">
      <Header />
      <div className='line-div'></div>
      <Login />
      <div className='line-div'></div>
      <Footer />
    </div>
    </>
  );
}

export default App;

import './App.css';
import React from 'react';
import Home from '../src/Pages/Home';
import Login from '../src/Pages/Login';
import Register from '../src/Pages/Register';

function App() {
  return (
    <React.Fragment>
   <Register />
   <Login />
   <Home />    
   </React.Fragment>
  );
}

export default App;

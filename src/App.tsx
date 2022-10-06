import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Graphs from './components/Graphs';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [layoutkey, setLayoutkey] = useState(Math.random())

  useEffect(() => {
    if (!!localStorage.getItem('isSignIn') && localStorage.getItem('isSignIn') === 'true') {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const isLoggedIn = () => {
    setLayoutkey(Math.random())
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout key={layoutkey } />}>
          <Route path='/' element={<Login isLoggedIn={isLoggedIn} />} />
          {isAuthenticated &&
            (<>
              <Route path='/home' element={<Home />} />
              <Route path='/graph' element={<Graphs />} />
            </>)
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

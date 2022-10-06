import React, { useEffect, useState,ReactNode,FC } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Graphs from './components/Graphs';
import { useNavigate } from "react-router-dom";

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const PriviteRoute:FC<Props> =({children}) =>{
  const navigate = useNavigate();
  useEffect(()=>{
    if (!!localStorage.getItem('isSignIn') && localStorage.getItem('isSignIn') === 'true') {
      
    } else {
      navigate("/")
    }
  },[])

  return <span>{children}</span>

}

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
              <Route path='/home' element={<PriviteRoute><Home /> </PriviteRoute>} />
              <Route path='/graph' element={<PriviteRoute><Graphs /> </PriviteRoute>} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

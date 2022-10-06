import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
function Navbar(props:any) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!!localStorage.getItem('isSignIn') && localStorage.getItem('isSignIn') === 'true') {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const logout = () =>{
    localStorage.clear();
    props.resetNavKey(Math.random());
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" className='img-fluid' width={50} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          {isAuthenticated ?
            (<>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/graph"}>Graph</Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/"} onClick={logout}>Logout</Link>
                </li>
              </ul>
            </>)
            :
            (<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Login</Link>
              </li>
            </ul>)
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
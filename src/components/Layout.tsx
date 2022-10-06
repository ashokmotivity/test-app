import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout(props: any) {

  const [navKey, setNavKey] = useState(Math.random());

  return (
    <>
      <Navbar key={navKey} resetNavKey={setNavKey}/>
      <Outlet />
    </>
  )
}

export default Layout
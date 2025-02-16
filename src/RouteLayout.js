import React from 'react'
import NavBar1 from './components/NavBar1'
import { Outlet } from 'react-router-dom'
import NavBar2 from './components/NavBar2'
import NavBar3 from './components/NavBar3'

const RouteLayout = () => {
  return (
    <div>
        <NavBar1 />
        <NavBar2 />
        <NavBar3 />
        <Outlet />
    </div>
  )
}

export default RouteLayout
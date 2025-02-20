import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar3 = () => {
  return (
    <div className="link-header">
      <div className="sec-nav">
        <ul className="nav-list">
          <NavLink className='nav-list-type' to='Shop'><li>Shop All</li></NavLink>
          <NavLink className='nav-list-type'><li>Computers</li></NavLink>
          <NavLink className='nav-list-type'><li>Tablets</li></NavLink>
          <NavLink className='nav-list-type'><li>Drones & Cameras</li></NavLink>
          <NavLink className='nav-list-type'><li>Audio</li></NavLink>
          <NavLink className='nav-list-type'><li>Mobile</li></NavLink>
          <NavLink className='nav-list-type'><li>T.V & Home Cinema</li></NavLink>
          <NavLink className='nav-list-type'><li>Wearable Tech</li></NavLink>
          <NavLink className='nav-list-type'><li>Sale</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default NavBar3
import React from 'react'
import { NavLink } from 'react-router-dom'
import { homeIcon, portfolioIcon, contactIcon } from '../images';

function Header (params) {
  return (
    <div className="nav_container">
      <NavLink className="nav_link" exact to={'/'}>
        <img src={homeIcon} alt="home nav link"/>
        <span>Home</span>
      </NavLink>
      <NavLink className="nav_link" to={'/portfolio'}>
        <img src={portfolioIcon} alt="portfolio nav link"/>
        <span>Portfolio</span>
      </NavLink>
      <NavLink className="nav_link" to={'/contact'}>
        <img src={contactIcon} alt="contact nav link"/>
        <span>Contact</span>
      </NavLink>
    </div>
  )
}

export default Header

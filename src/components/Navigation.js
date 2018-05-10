import React from 'react'
import { NavLink } from 'react-router-dom'
import { homeIcon, portfolioIcon, contactIcon, github } from '../images';

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
      <a className="nav_link" href="https://github.com/dwats" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github nav link"/>
        <span>Github</span>
      </a>
    </div>
  )
}

export default Header

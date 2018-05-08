import React from 'react'
import { logo } from '../images';

function Header (params) {
  return (
    <div className="header">
      <div className="header__icon_container">
        <div className="header__icon">
          <img src={logo}></img>
        </div>
      </div>
      <div className="header__title_container">
        <div className="header__subtitle">
          The personal website of
        </div>
        <div className="header__title">
          Eric Julius
        </div>
      </div>
    </div>
  )
}

export default Header

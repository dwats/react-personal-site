import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Content = () => (
  <div className="content_container">
    <Route exact path='/' component={Home} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/contact' component={Contact} />
  </div>
)

export default Content

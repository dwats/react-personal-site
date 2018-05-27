import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Portfolio from './portfolio'
import Contact from './Contact'
import Podcast from './portfolio/podcast'
import Timelapse from './portfolio/timelapse'

class Content extends Component {
  constructor(props) {
    super(props)
    this.scope = {
      currentLocation: undefined
    }
  }

  render() {
    return (
      <div className="content_container">
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio/podcast' component={Podcast} />
        <Route path='/portfolio/timelapse' component={Timelapse} />
      </div>
    )
  }
}

export default Content

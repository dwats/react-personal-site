import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page_container">
          <Header />
          <div className="body_container">
            <Navigation />
            <Content />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

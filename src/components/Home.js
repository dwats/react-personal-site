import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import home from '../markdown/home.md'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markdown: undefined
    }
  }

  componentDidMount() {
    fetch(home)
      .then(res => res.text())
      .then(text => {
        this.setState({
          markdown: text
        })
      })
      .catch(err => {
        this.setState({
          markdown: '##Error Loading Content'
        })
      })
  }

  render() {
    return (
      <div className="article">
        <ReactMarkdown source={this.state.markdown} />
      </div>
    )
  }
}

export default Home

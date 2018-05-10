import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from '../ContentHeader'
import ReactMarkdown from 'react-markdown'
import podcast from '../../markdown/podcast.md'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markdown: undefined
    }
  }

  componentDidMount() {
    fetch(podcast)
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

  render () {
    const match = this.props.match
    return (
      <div>
        <ContentHeader title="Portfolio" subtitle="Take a look at what I've done."/>
        <div className="content_container">
          <div className="article">
            <div className="article_body">
              <ReactMarkdown source={this.state.markdown} />
            </div>
            <Link className="article_button" to={`${match.url}/podcast`}>Open</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio

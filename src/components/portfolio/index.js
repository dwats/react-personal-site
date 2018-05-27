import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from '../ContentHeader'
import ReactMarkdown from 'react-markdown'
import podcast from '../../markdown/podcast.md'
import timelapse from '../../markdown/timelapse.md'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      podcast: undefined,
      timelapse: undefined
    }
  }

  async componentDidMount() {
    const podcastBody = await fetch(podcast)
      .catch(err => this.setState({ podcast: '##Error Loading Content' }))
    const timelapseBody = await fetch(timelapse)
      .catch(err => this.setState({ timelapse: '##Error Loading Content' }))

    this.setState({
      timelapse: await timelapseBody.text(),
      podcast: await podcastBody.text()
    })
  }

  render () {
    const match = this.props.match
    return (
      <div>
        <ContentHeader title="Portfolio" subtitle="Take a look at what I've done."/>
        <div>
        <div className="article">
            <div className="article_body">
              <ReactMarkdown
                source={this.state.podcast}
                renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
              />
            </div>
            <Link className="article_button" to={`${match.url}/podcast`}>Open</Link>
          </div>

          <div className="article">
            <div className="article_body">
              <ReactMarkdown
                source={this.state.timelapse}
                renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
              />
            </div>
            <Link className="article_button" to={`${match.url}/timelapse`}>Open</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio

import React, { Component } from 'react'
import { playButton } from '../../../images'
import fetchPodcast from './utils/fetchPodcast'
import Episodes from './Episodes';
import Search from './Search'

class Podcast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: {}
    }
    this.fetchPodcastContent = this.fetchPodcastContent.bind(this)
  }

  async componentDidMount() {
    await this.fetchPodcastContent()
    console.log(this.state)
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.selected === this.state.selected) return false
    this.fetchPodcastContent()
  }

  async fetchPodcastContent() {
    this.setState({
      content: {},
      loading: true
    })
    const content = await fetchPodcast()
    content.episodes.forEach(episode => {
      const regex = /(<([^>]+)>)/ig
      episode.description = episode.description.replace(regex, "")
    })
    this.setState({
      content,
      loading: false
    })
  }

  render() {
    const episodes = this.state.content.episodes || []

    return (
      <div id="podcast__container">
        <Search handleSearchAction={'hello'} />
        <Episodes episodes={episodes} />
      </div>
    )
  }
}

export default Podcast

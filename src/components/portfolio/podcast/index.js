import React, { Component } from 'react'
import fetchPodcast from './utils/fetchPodcast'
import Episodes from './Episodes'
import Search from './Search'
import ContentHeader from '../../ContentHeader'
import Pagination from './Pagination'

class Podcast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: {},
      refreshed: false,
      path: 'episodes',
      query: {
        search: '',
        page: 1
      }
    }
    this.fetchPodcastContent = this.fetchPodcastContent.bind(this)
    this.handleSearchAction = this.handleSearchAction.bind(this)
    this.handleGetLatest = this.handleGetLatest.bind(this)
    this.handleGotoPage = this.handleGotoPage.bind(this)
  }

  async componentDidMount() {
    await this.fetchPodcastContent()
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.refreshed) return false
    //await this.fetchPodcastContent()
  }

  async fetchPodcastContent() {
    this.setState({
      content: {},
      loading: true
    })

    const content = await fetchPodcast(this.state.path, this.state.query)

    this.setState({
      content,
      loading: false
    })
  }

  async handleSearchAction(search) {
    await this.setState((currentState) => (
      {
        ...currentState,
        path: 'episodes',
        query: {
          ...currentState.query,
          page: 1,
          search
        }
      }
    ))
    await this.fetchPodcastContent()
  }

  async handleGetLatest() {
    await this.setState((currentState) => (
      {
        ...currentState,
        path: 'episodes/latest'
      }
    ))
    await this.fetchPodcastContent()
  }

  async handleGotoPage(page) {
    await this.setState((currentState) => (
      {
        ...currentState,
        path: 'episodes',
        query: {
          ...currentState.query,
          page
        }
      }
    ))
    await this.fetchPodcastContent()
  }

  render() {
    const episodes = this.state.content.episodes || []

    return (
      <div>
        <ContentHeader title="Unofficial MBMBaM Podcast Browser" subtitle="XML to JSON to your ears." />
        <div id="podcast__container">
          <Search
            handleSearchAction={this.handleSearchAction}
            handleGetLatest={this.handleGetLatest}
          />

          <Pagination
            handleGotoPage={this.handleGotoPage}
            page={this.state.content.page}
            pages={this.state.content.pages}
            next={this.state.content.next && this.state.content.page + 1}
            prev={this.state.content.prev && this.state.content.page - 1}
          />
          {
            episodes.length
            ? <Episodes episodes={episodes} />
            : <div className="card">Nothing Here...</div>
          }
          <Pagination
            handleGotoPage={this.handleGotoPage}
            page={this.state.content.page}
            pages={this.state.content.pages}
            next={this.state.content.next && this.state.content.page + 1}
            prev={this.state.content.prev && this.state.content.page - 1}
          />
        </div>
      </div>
    )
  }
}

export default Podcast

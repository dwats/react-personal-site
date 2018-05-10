import React, { Component } from 'react'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
    this.updateInput = this.updateInput.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.handleLatestClick = this.handleLatestClick.bind(this)
  }

  handleSearchClick (e) {
    e.preventDefault()
    this.props.handleSearchAction(this.state.input)
  }

  handleLatestClick (e) {
    e.preventDefault()
    this.props.handleGetLatest()
  }

  updateInput(e) {
    const value = e.target.value
    this.setState({
      input: value
    })
  }

  render() {
    return (
      <div className="podcast__search">
        <form action="">
          <input
            className="podcast_search__field"
            type="text"
            placeholder="My Brother, My Brother and Me"
            value={this.state.input}
            onChange={this.updateInput}
          />
          <input
            type="submit"
            className="podcast_search__button"
            onClick={this.handleSearchClick}
            value="Search"
          />
          <input
            type="button"
            className="podcast_latest__button"
            onClick={this.handleLatestClick}
            value="Latest"
          />
        </form>
      </div>
    )
  }
}

export default Search

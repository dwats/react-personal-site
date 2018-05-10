import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div className="podcast__search">
        <input className="podcast_search__field" type="text"/>
        <button className="podcast_search__button">Search</button>
      </div>
    )
  }
}

export default Search

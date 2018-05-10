import React, { Component } from 'react'

class Episodes extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const episodes = this.props.episodes
    return (
      <div id="podcast__episodes_container">
          {
            episodes.map((episode, index) => (
              <div className="podcast__episode" key={index}>
                <div className="podcast__episode_title">{episode.title}</div>
                <div className="podcast__episode_details">
                  <div className="podcast__episode_description">
                    {episode.description}
                  </div>
                </div>
                <a href={episode.url} target="_blank" className="podcast__episode_listen">
                  {/* <img src={playButton} alt="play episode"/> */}
                  <audio controls>
                    <source src={episode.url} type="audio/mp3"></source>
                  </audio>
                </a>
              </div>
            ))
          }
        </div>
    )
  }
}

export default Episodes

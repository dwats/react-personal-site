import React from 'react'

import ContentHeader from '../../ContentHeader'

const Timelapse = (props) => (
  <div>
    <ContentHeader title="Timelapse" subtitle="Watching things that happen slowly, quickly."/>
    <div>
      <div className="article">
        <div className="article_body">
          <video controls loop autoplay>
            <source src="http://media.ericjuli.us/timelapse.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  </div>
)

export default Timelapse

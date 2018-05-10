import React from 'react'
import { Route } from 'react-router-dom'

const ContentHeader = (props) => (
  <div className="content_header">
    <div className="content_header__title">{props.title}</div>
    <div className="content_header__subtitle">{props.subtitle}</div>
  </div>
)

export default ContentHeader
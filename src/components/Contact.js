import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import contact from '../markdown/contact.md'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markdown: undefined
    }
  }

  componentDidMount() {
    fetch(contact)
      .then(res => res.text())
      .then(text => {
        this.setState({
          markdown: text
        })
      })
      .catch(err => {
        this.setState({
          markdown: '## Error Loading Content'
        })
      })
  }

  render() {
    return (
      <div className="article">
        <ReactMarkdown
          source={this.state.markdown}
          renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
        />
      </div>
    )
  }
}
export default Contact

import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import contact from '../markdown/contact.md'
import ContentHeader from './ContentHeader'

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
      <div>
        <ContentHeader title="Contact Me" subtitle="Get in touch!"/>
        <div className="article">
          <div className="article_body">
            <ReactMarkdown
              source={this.state.markdown}
              renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Contact

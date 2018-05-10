import React, { Component } from 'react'

class Pagination extends Component {
  render() {
    return (
      <div className="podcast__pagination">
        <button
          disabled={!this.props.prev}
          className="podcast__pagination_button"
          onClick={() => this.props.handleGotoPage(1)}>
            First
        </button>
        <button
          disabled={!this.props.prev}
          className="podcast__pagination_button"
          onClick={() => this.props.handleGotoPage(this.props.page - 1)}>
            Prev
        </button>
        <div className="podcast__pagination_display">{this.props.page || '1'} of {this.props.pages || '1'}</div>
        <button
          disabled={!this.props.next}
          className="podcast__pagination_button"
          onClick={() => this.props.handleGotoPage(this.props.page + 1)}>
            Next
        </button>
        <button
          disabled={!this.props.next}
          className="podcast__pagination_button"
          onClick={() => this.props.handleGotoPage(this.props.pages)}>
            Last
        </button>
      </div>
    )
  }
}

export default Pagination

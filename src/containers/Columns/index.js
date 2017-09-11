import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '../../components/card.js'

class Columns extends PureComponent {

  handleDragOver(e) {
    e.preventDefault()
    return false
  }

  handleDragEnter(e) {
    console.log('dragEnter')
    e.target.classList.add('over')
  }

  handleDragLeave(e) {
    console.log('dragLeave')
    e.target.classList.remove('over')
  }

  handleDrop(e) {
    e.stopPropagation()
    e.target.classList.remove('over')
    return false
  }

  render() {
    return (
      <div className="column">
        <div className="column__heading">{this.props.columnType}</div>
        <div
          className="column__cards"
          onDrop={this.handleDrop.bind(this)}
          onDragOver={this.handleDragOver.bind(this)}
          onDragEnter={this.handleDragEnter.bind(this)}
          onDragLeave={this.handleDragLeave.bind(this)}
        >
          {
            this.props.cards
            .filter(card =>
              card.status === this.props.columnType.toLowerCase()
            )
            .map(card =>
              <Card
                key={card.id}
                handleDelete={this.props.handleDelete.bind(this)}
                {...card}
              />
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Columns)

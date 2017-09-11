import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '../../components/card.js'

class Columns extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOver: false
    }
  }

  handleDragOver(e) {
    console.log('dragOver')
    e.preventDefault()
  }

  handleDragEnter(e) {
    console.log('dragEnter')
    this.setState({
      isOver: true
    })
  }

  handleDragLeave(e) {
    console.log('dragLeave')
    this.setState({
      isOver: false
    })
  }

  handleDrop(e) {
    console.log('drop')
    e.stopPropagation()
    this.setState({
      isOver: false
    })
  }

  render() {
    const classes = `column ${this.state.isOver ? 'column--over' : ''}`
    return (
      <div className={classes}>
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

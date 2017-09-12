import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '../../components/card.js'
import { moveCard, setDrag } from '../../actions'

class Columns extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOver: false
    }
  }

  handleDragOver(e) {
    e.preventDefault()
  }

  handleDragEnter(e) {
    this.setState({
      isOver: true
    })
  }

  handleDragLeave(e) {
    this.setState({
      isOver: false
    })
  }

  handleMouseUp(e) {
    e.stopPropagation()
    this.props.moveCard(e.target.dataset.name)
    this.props.setDrag(false)
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
          data-name={this.props.columnType}
          onDrop={this.handleMouseUp.bind(this)}
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
  return {
    moveCard: status => {
      dispatch(moveCard(status))
    },

    setDrag: current => {
      dispatch(setDrag(current))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Columns)

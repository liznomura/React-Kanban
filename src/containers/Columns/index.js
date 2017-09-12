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

  handleMouseEnter(e) {
    console.log('enter')
    this.setState({ isOver: true })
  }

  handleMouseLeave(e) {
    console.log('leave')
    this.setState({ isOver: false })
  }

  handleMouseUp(e) {
    console.log('mouseUp')
      console.log(this.props.dragging)
    if(this.props.dragging !== false) {
      this.props.moveCard(e.target.dataset.name)
      this.props.setDrag(false)
    }
  }

  handleMouseDown(e) {
    console.log('mouseDown')
    e.preventDefault()
    this.props.setDrag(e.target.id)
  }

  render() {
    const classes = `column ${this.state.isOver ? 'column--over' : ''}`
    return (
      <div className={classes}>
        <div className="column__heading">{this.props.columnType}</div>
        <div
          className="column__cards"
          data-name={this.props.columnType}
          onMouseUp={this.handleMouseUp.bind(this)}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
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
                onDragStart={this.handleMouseDown.bind(this)}
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
    dragging: state.dragging,
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

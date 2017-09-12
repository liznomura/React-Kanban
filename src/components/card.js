import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { setDrag } from '../actions'

class Card extends PureComponent {

  handleMouseDown(e) {
    this.props.setDrag(e.target.id)
  }

  handleMouseUp(e) {
    this.props.setDrag(false)
  }

  render() {
    const classes = `card card--${this.props.priority} ${this.props.dragging ? 'card--opacity' : ''}`

    return (
      <div
        id={this.props.id}
        className={classes}
        draggable="true"
        onDragStart={this.handleMouseDown.bind(this)}
        onDragEnd={this.handleMouseUp.bind(this)}
      >
        <span
          className="card__delete"
          onClick={this.props.handleDelete}
          data-id={this.props.id}
        >
        &times;
        </span>
        <div className="cardText">
          <p>{this.props.title}</p>
          <span>Priority: {this.props.priority}</span>
          <br />
          <span>Assigned by: {this.props.createdBy}</span>
          <span className="floatRight">{this.props.assignedTo}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dragging: state.dragging
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDrag: current => {
      dispatch(setDrag(current))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

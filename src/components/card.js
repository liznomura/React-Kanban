import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { setDrag, toggleEdit } from '../actions'
import EditForm from '../containers/EditForm'

class Card extends PureComponent {

  toggleEditing(e) {
    this.props.toggleEdit()
  }

  render() {
    const classes = `card card--${this.props.priority} ${this.props.dragging ? 'card--opacity' : ''}`;
    const isEditing = this.props.editing;

    return (
      <div
        id={this.props.id}
        className={classes}
        draggable="true"
        onDragStart={this.props.onDragStart}
      >
        <div
          className="card__delete"
          onClick={this.props.handleDelete}
          data-id={this.props.id}
        >
        &times;
        </div>
          {isEditing ? (
            <EditForm
            cardId={this.props.id}
            title={this.props.title}
            priority={this.props.priority}
            assignedBy={this.props.createdBy}
            assignedTo={this.props.assignedTo}
            status={this.props.status}
            />
            ) : (
            <div className="card__text">
              <h2>{this.props.title}</h2>
              <p>Priority: {this.props.priority}</p>
              <span>Assigned by: {this.props.createdBy}</span>
              <span>{this.props.assignedTo}</span>
              <span onClick={this.toggleEditing.bind(this)}>edit</span>
            </div>
            )
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    editing: state.editing,
    dragging: state.dragging
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDrag: current => {
      dispatch(setDrag(current))
    },

    toggleEdit: () => {
      dispatch(toggleEdit())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { setDrag, toggleEdit } from '../actions'
import EditForm from '../containers/EditForm'

class Card extends PureComponent {

  toggleEditing(e) {
    const id = parseInt(this.props.id, 10);
    console.log(id)
    this.props.toggleEdit(id)
  }

  render() {
    const classes = `card card--${this.props.priority} ${this.props.dragging ? 'card--opacity' : ''}`;
    const isEditing = this.props.editing;
    const cardId = parseInt(this.props.id, 10);

    return (
      <div
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
          {isEditing === cardId ? (
            <EditForm
            cardId={cardId}
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

    toggleEdit: (current) => {
      dispatch(toggleEdit(current))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

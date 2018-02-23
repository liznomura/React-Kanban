import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { setDrag, toggleEdit } from '../actions'
import EditForm from '../containers/EditForm'
import Edit from './edit'

class Card extends PureComponent {

  toggleEditing(e) {
    const id = parseInt(this.props.id, 10);
    this.props.toggleEdit(id)
  }

  render() {
    const classes = `card card--${this.props.priority} ${this.props.dragging ? 'card--opacity' : ''}`;
    const isEditing = this.props.editing;
    const cardId = parseInt(this.props.id, 10);

    return (
      <div
        id={this.props.id}
        className={classes}
        draggable="true"
        onDragStart={this.props.onDragStart}
      >
        <div className="card__controls">
          <div
            className="card__edit"
            onClick={this.toggleEditing.bind(this)}
          ><Edit /></div>
          <div
            className="delete delete--card"
            onClick={() => this.props.handleDelete(this.props.id)}
          />
        </div>
        {isEditing === cardId ? (
          <div className="card__content">
            <EditForm
            cardId={cardId}
            title={this.props.title}
            priority={this.props.priority}
            assignedBy={this.props.createdBy}
            assignedTo={this.props.assignedTo}
            status={this.props.status}
            />
          </div>
          ) : (
          <div className="card__content">
            <h2>{this.props.title}</h2>
            <div>Priority: {this.props.priority}</div>
            <div className="card__assignments">
              <span>Assigned by: {this.props.createdBy}</span>
              <div className="card__assigned-to">
                <span>{this.props.assignedTo}</span>
              </div>
            </div>
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

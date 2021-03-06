import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { editCard, toggleEdit } from '../../actions';

class EditForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.cardId,
      colId: this.props.colId,
      title: this.props.title,
      priority: this.props.priority,
      createdBy: this.props.assignedBy,
      assignedTo: this.props.assignedTo
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (Object.values(this.state).some(value => value === '')) {
      return
    }
    this.props.editCard(this.state)
    this.props.toggleEdit(false)
  }

  render() {
    return (
      <div className="edit-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label className="edit-form__label" htmlFor="title">Title: </label>
          <input
            className="edit-form__input"
            type="text"
            id="title"
            placeholder="Title"
            onChange={this.handleChange.bind(this)}
            value={this.state.title}
          />
          <label className="edit-form__label" htmlFor="priority">Priority: </label>
          <select
            className="edit-form__select"
            id="priority"
            onChange={this.handleChange.bind(this)}
            value={this.state.priority}
          >
            <option value="">-</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <label className="edit-form__label" htmlFor="createdBy">Created By: </label>
          <input
            className="edit-form__input"
            type="text"
            id="createdBy"
            placeholder="Created By"
            onChange={this.handleChange.bind(this)}
            value={this.state.createdBy}
          />
          <label className="edit-form__label" htmlFor="assignedTo">Assigned To: </label>
          <input
            className="edit-form__input"
            type="text"
            id="assignedTo"
            placeholder="Assigned To"
            onChange={this.handleChange.bind(this)}
            value={this.state.assignedTo}
          />
          <div className="edit-form-btn">
            <button
              type="submit"
              className="edit-form__edit-card-btn"
            >
              Save Task
            </button>
            <div className="edit-form-btn__err-text"></div>
          </div>
        </form>
      </div>
      )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    toggleEdit: () => {
      dispatch(toggleEdit());
    },

    editCard: card => {
      dispatch(editCard(card));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
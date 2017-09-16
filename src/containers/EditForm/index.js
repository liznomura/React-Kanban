import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { editCard, toggleEdit } from '../../actions';

class EditForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.cardId,
      title: this.props.title,
      priority: this.props.priority,
      createdBy: this.props.assignedBy,
      assignedTo: this.props.assignedTo,
      status: this.props.status
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.editCard(this.state)
    this.props.toggleEdit(false)
  }

  render() {
    return (
      <div className="edit-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="edit-form__input"
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange.bind(this)}
            value={this.state.title}
          />
          <select
            className="edit-form__select"
            name="priority"
            onChange={this.handleChange.bind(this)}
            value={this.state.priority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
          <input
            className="edit-form__input"
            type="text"
            name="createdBy"
            placeholder="Created By"
            onChange={this.handleChange.bind(this)}
            value={this.state.createdBy}
          />
          <input
            className="edit-form__input"
            type="text"
            name="assignedTo"
            placeholder="Assigned To"
            onChange={this.handleChange.bind(this)}
            value={this.state.assignedTo}
          />
          <button
            type="submit"
            className="edit-form__edit-card-btn"
          >
            Edit Task
          </button>
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
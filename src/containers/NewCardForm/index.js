import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class NewCardForm extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      priority: 'new',
      createdBy: '',
      assignedTo: ''
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
    this.props.addCard(this.state)

    this.setState({
      title: '',
      priority: 'new',
      createdBy: '',
      assignedTo: ''
    })
  }

  render() {
    return (
      <div id="add-form" className="add-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="add-form__input"
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange.bind(this)}
            value={this.state.title}
          />
          <select
            className="add-form__select"
            name="priority"
            onChange={this.handleChange.bind(this)}
            value={this.state.priority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            className="add-form__input"
            type="text"
            name="createdBy"
            placeholder="Created By"
            onChange={this.handleChange.bind(this)}
            value={this.state.createdBy}
          />
          <input
            className="add-form__input"
            type="text"
            name="assignedTo"
            placeholder="Assigned To"
            onChange={this.handleChange.bind(this)}
            value={this.state.assignedTo}
          />
          <button
            type="submit"
            className="add-form__add-card-btn"
            onClick={this.props.visibilityToggle }
          >
            Add Task
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => {
      dispatch(addCard(card));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm)

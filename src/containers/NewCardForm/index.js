import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: 'low',
      createdBy: '',
      assignedTo: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCard(this.state);
    this.setState({
      title: '',
      priority: 'low',
      createdBy: '',
      assignedTo: ''
    });
  }

  render() {
    return (
      <div id="form" className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form__input"
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <select
            className="form__select"
            name="priority"
            onChange={this.handleChange}
            value={this.state.priority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
          <input
            className="form__input"
            type="text"
            name="createdBy"
            placeholder="Created By"
            onChange={this.handleChange}
            value={this.state.createdBy}
          />
          <input
            className="form__input"
            type="text"
            name="assignedTo"
            placeholder="Assigned To"
            onChange={this.handleChange}
            value={this.state.assignedTo}
          />
          <button type="submit" className="form__add-card-btn" onClick={this.props.visibilityToggle }>Add Task</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => {
      dispatch(addCard(card));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);

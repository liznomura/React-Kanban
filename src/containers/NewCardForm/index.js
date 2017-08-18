import React from "react";
import { connect } from "react-redux";
import { addCard } from "../../actions";

class NewCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      priority: "low",
      createdBy: "",
      assignedTo: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    console.log(value);

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCard({ ...this.state });
  }

  render() {
    return (
      <div className="formContainer" id="formContainer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <select
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
            type="text"
            name="createdBy"
            placeholder="Created By"
            onChange={this.handleChange}
            value={this.state.createdBy}
          />
          <input
            type="text"
            name="assignedTo"
            placeholder="Assigned To"
            onChange={this.handleChange}
            value={this.state.assignedTo}
          />
          <button type="submit" className="submitBtn" onClick={ visibilityToggle }>Add Task</button>
        </form>
      </div>
    );
  }
}

function visibilityToggle() {
  let form = document.getElementById('formContainer');
  form.classList.toggle('toggleShow');
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

NewCardForm = connect(mapStateToProps, mapDispatchToProps)(NewCardForm);

export default NewCardForm;

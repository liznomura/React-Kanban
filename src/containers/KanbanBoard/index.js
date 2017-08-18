import React from "react";
import { connect } from "react-redux";
import { delCard } from "../../actions";
import InQueue from "../InQueue";
import InProgress from "../InProgress";
import Done from "../Done";

class KanbanBoard extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    console.log(e.target);
  }


  handleDelete(e) {
    this.props.deleteCard(e.target.id);
  }

  render() {
    return (
      <div className="kanbanBoard">
        <InQueue handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        <InProgress handleDelete={this.handleDelete}handleEdit={this.handleEdit} />
        <Done handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: id => {
      dispatch(delCard(id));
    }
  };
};

KanbanBoard = connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);

export default KanbanBoard;

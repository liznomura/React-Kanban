import React from "react";
import { connect } from "react-redux";
import { loadCards, delCard } from "../../actions";
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
    console.log('lul not finished aha');
  }

  handleDelete(e) {
    this.props.deleteCard(e.target.id);
  }

  componentWillMount() {
    this.props.loadCards();
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
    cards: state.cards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      dispatch(loadCards())
    },

    deleteCard: id => {
      dispatch(delCard(id));
    }
  };
};

KanbanBoard = connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);

export default KanbanBoard;

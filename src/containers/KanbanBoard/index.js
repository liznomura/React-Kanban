import React from 'react';
import { connect } from 'react-redux';
import { delCard } from '../../actions';
import InQueue from '../InQueue';
import InProgress from '../InProgress';
import Done from '../Done';

class KanbanBoard extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  // handler for status

  // handler for priority

  // deleting card
  handleDelete(e) {
    this.props.deleteCard(e.target.id)
  }

  render() {
    return (
      <div className="kanbanBoard">
        <InQueue handleDelete={ this.handleDelete }/>
        <InProgress handleDelete={ this.handleDelete }/>
        <Done handleDelete={ this.handleDelete }/>
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
    deleteCard: (id) => {
      dispatch(delCard(id));
    }
  };
};

KanbanBoard = connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);

export default KanbanBoard;

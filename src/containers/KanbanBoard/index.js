import React from 'react';
import { connect } from 'react-redux';
import InQueue from '../InQueue';
import InProgress from '../InProgress';
import Done from '../Done';

class KanbanBoard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // handler for status

  // handler for priority

  // deleting card
  // handleDelete(e) {

  // }

  render() {
    return (
      <div>
        <InQueue />
        <InProgress />
        <Done />
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
  return {};
};

KanbanBoard = connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);

export default KanbanBoard;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards, delCard } from '../../actions';
import InQueue from '../InQueue';
import InProgress from '../InProgress';
import Done from '../Done';

class KanbanBoard extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }

  handleDragStart(e) {
    this.style.opacity = '0.4';
  }

  handleDelete(e) {
    this.props.deleteCard(e.target.id);
  }

  componentWillMount() {
    this.props.loadCards();
  }

  componentDidMount() {
    let targets = document.querySelectorAll('.column');
    let source = document.querySelectorAll('')

    targets.forEach(col => {
      col.addEventListener('drag')
    })
  }

  render() {
    return (
      <div className="kanbanBoard">
        <InQueue
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
        <InProgress
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
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
      dispatch(loadCards());
    },

    deleteCard: id => {
      dispatch(delCard(id));
    }
  };
};

KanbanBoard = connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);

export default KanbanBoard;

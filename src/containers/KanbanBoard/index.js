import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delCard } from '../../actions';
import Columns from '../Columns';

class KanbanBoard extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.deleteCard(e.target.id);
  }

  componentWillMount() {
    // this.props.loadCards();
  }

  render() {
    return (
      <div className="kanbanBoard">
      {this.props.columns.map(column => {
        return <Columns columnType={column} handleDelete={this.handleDelete} />
      })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    columns: state.columns,
    cards: state.cards
  };
};

const mapDispatchToProps = dispatch => {
  return {

    deleteCard: id => {
      dispatch(delCard(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);

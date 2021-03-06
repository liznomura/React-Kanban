import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCard, toggleEdit, addColumn } from '../actions';

class Nav extends PureComponent {

  addTask () {
    const card = {
      title: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    };


    if (this.props.editing === false) { // shouldn't add new card if new card is already out
      const id = this.props.addCard(card);
      this.props.toggleEdit(id);
    }
  }

  addColumn () {
    this.props.addColumn('new column')
  }

  titleOnClick () {
    window.location.reload();
  }

  render () {
    return (
      <div className="nav">
        <div className="nav__title" onClick={this.titleOnClick.bind(this)}>Kanban Board!</div>
        <div className="nav__controls">
          <button className="btn new-task-btn" onClick={this.addTask.bind(this)}>New Task</button>
          <button className="btn new-column-btn" onClick={this.addColumn.bind(this)}>Add Column</button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    editing: state.editing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => {
      const action = addCard(card);
      dispatch(action);
      return action.card.id;
    },

    toggleEdit: id => {
      dispatch(toggleEdit(id));
    },

    addColumn: colTitle => {
      dispatch(addColumn(colTitle));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

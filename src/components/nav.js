import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCard, toggleEdit, addColumn } from '../actions';

class Nav extends PureComponent {

  onClick () {
    const card = {
      title: '',
      priority: 'low',
      createdBy: '',
      assignedTo: ''
    };

    const id = this.props.addCard(card);
    this.props.toggleEdit(id);
  }

  addColumn () {
    this.props.addColumn('new column')
  }

  render () {
    return (
      <div className="nav">
        <div className="nav__title">Kanban</div>
        <div className="nav__controls">
          <button className="new-task-btn" onClick={this.onClick.bind(this)}>New Task</button>
          <button className="new-column-btn" onClick={this.addColumn.bind(this)}>Add Column</button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({});

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

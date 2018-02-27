import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { delCard, delColumn } from '../../actions'
import Columns from '../Columns'

class KanbanBoard extends PureComponent {

  handleDelete(id) {
    this.props.deleteCard(id)
  }

  handleColumnDelete(colId) {
    this.props.delColumn(colId)
  }

  componentWillMount() {
    // this.props.loadCards()
  }

  render() {
    return (
      <div className="kanban-board">
        {
          this.props.columns
            .map((column, i) =>
              <Columns
                key={i}
                colId={column.id}
                columnType={column.title}
                handleDelete={this.handleDelete.bind(this)}
                handleColumnDelete={this.handleColumnDelete.bind(this)}
              />
            )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    columns: state.columns,
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: id => {
      dispatch(delCard(id))
    },
    delColumn: colId => {
      dispatch(delColumn(colId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard)

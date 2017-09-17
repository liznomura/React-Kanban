import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { delCard } from '../../actions'
import Columns from '../Columns'

class KanbanBoard extends PureComponent {

  handleDelete(id) {
    this.props.deleteCard(id)
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
                colId={i}
                columnType={column}
                handleDelete={this.handleDelete.bind(this)}
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '../../components/card.js'
import { moveCard, setDrag, editColumnTitle } from '../../actions'

class Columns extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOver: false,
      isEditingTitle: false,
      title: this.props.columnType
    }
  }

  handleMouseEnter () {
    if (this.props.dragging !== false) {
      this.setState({ isOver: true })
    }
  }

  handleMouseLeave () {
    if (this.props.dragging !== false) {
      this.setState({ isOver: false })
    }
  }

  handleMouseUp (e) {
    if (this.props.dragging !== false) {

      if (e.target.dataset.name) {
        this.props.moveCard(e.target.dataset.name)
      }

      this.props.setDrag(false)
      this.setState({ isOver: false })
    }
  }

  handleMouseDown (e) {
    e.preventDefault()
    const id = parseInt(e.target.id, 10);
    this.props.setDrag(id)
  }

  onTitleClick () {
    if (!this.state.isEditingTitle) {
      this.setState({
        isEditingTitle: true
      })
    }
  }

  onTitleChange (e) {
    this.setState({
      title: e.target.value
    })
  }

  onInputBlur () {
    if (this.state.title === '') {
      return
    }

    this.setState({
      isEditingTitle: false
    })

    this.props.editColumnTitle(this.props.colId, this.state.title)
  }

  onKeyPress (e) {
    if (e.charCode === 13 && this.state.title !== '') {

      this.setState({
        isEditingTitle: false
      })

      this.props.editColumnTitle(this.props.colId, this.state.title)

      return false
    }
  }

  onDeleteClick () {
    this.props.handleColumnDelete(this.props.colId)
  }

  render() {
    const classes = `column ${this.state.isOver ? 'column--over' : ''}`
    return (
      <div className={classes}>
        <div className="column__heading">
          <div className="delete delete--column" onClick={this.onDeleteClick.bind(this)}></div>
          {
            this.state.isEditingTitle
              ? (
                <div className="heading__input">
                  <input type="text" value={this.state.title} placeholder="Column Title" onChange={this.onTitleChange.bind(this)} onBlur={this.onInputBlur.bind(this)} onKeyPress={this.onKeyPress.bind(this)} autoFocus/>
                </div>
              )
              : (
                <div
                  className="heading__text"
                  onDoubleClick={this.onTitleClick.bind(this)}
                >
                  {this.state.title}
                </div>
              )
          }
        </div>
        <div
          className="column__cards"
          data-name={this.props.columnType}
          onMouseUp={this.handleMouseUp.bind(this)}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
        >
          {
            this.props.cards
            .filter(card =>
              card.status === this.props.columnType
            )
            .map(card =>
              <Card
                key={card.id}
                handleDelete={this.props.handleDelete.bind(this)}
                onDragStart={this.handleMouseDown.bind(this)}
                {...card}
              />
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dragging: state.dragging,
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    moveCard: status => {
      dispatch(moveCard(status))
    },

    setDrag: current => {
      dispatch(setDrag(current))
    },

    editColumnTitle: (id, newTitle) => {
      dispatch(editColumnTitle(id, newTitle))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Columns)

import React, { PureComponent } from 'react';

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    }
  }

  handleDragStart(e) {
    this.setState({
      dragging: true
    })
  }

  handleDragEnd(e) {
    this.setState({
      dragging: false
    })
  }

  render() {
    const classes = `card ${'card--'.concat(this.props.priority)} ${this.state.dragging ? 'card--opacity' : ''}`

    return (
      <div
        className={classes}
        draggable="true"
        onDragStart={this.handleDragStart.bind(this)}
        onDragEnd={this.handleDragEnd.bind(this)}
      >
        <span
          id={this.props.id}
          className="card__delete"
          onClick={this.props.handleDelete}
        >
        &times;
        </span>
        <div className="cardText">
          <p>{this.props.title}</p>
          <span>Priority: {this.props.priority}</span>
          <br />
          <span>Assigned by: {this.props.createdBy}</span>
          <span className="floatRight">{this.props.assignedTo}</span>
        </div>
      </div>
    );
  }
}

export default Card;

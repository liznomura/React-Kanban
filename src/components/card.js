import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleDragStart(e) {
    e.target.style.opacity = '0.4';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
  }

  handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  render() {
    return (
      <div className={this.props.priority} draggable="true" onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd}>
      <small id={this.props.id} className="delete" onClick={this.props.handleDelete}>&times;</small>
      <div className="cardText">
      <p>
      {this.props.title}
      </p>
      <small>
      Priority: {this.props.priority}
      </small>
      <br />
      <small>
      Assigned by: {this.props.createdBy}
      </small>
      <small className="floatRight">
      {this.props.assignedTo}
      </small>
      </div>
      </div>
    );
  }
}

export default Card;

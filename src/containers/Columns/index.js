import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/card.js';

class Columns extends Component {
  constructor(props) {
    super(props);

    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'copy';
    return false;
  }

  handleDragEnter(e) {
    e.target.classList.add('over');
    console.log(e);
  }

  handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    let data = e.dataTransfer.getData('text');

    e.target.classList.remove('over');
    return false;
  }

  render() {
    return (
      <div className="column">
        <div className="colHeading">{this.props.columnType}</div>
        <div className="cardContainer">
          {this.props.cards
            .filter(card => card.status === this.props.columnType.toLowerCase())
            .map(card =>
              <Card
                key={card.id}
                handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop}
                {...card}
              />
            )}
        </div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Columns);


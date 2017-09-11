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
    console.log('dragEnter');
    e.target.classList.add('over');
  }

  handleDragLeave(e) {
    console.log('dragLeave');
    e.target.classList.remove('over');
  }

  handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    let data = e.dataTransfer.getData('text');
    console.log(data);
    e.target.classList.remove('over');
    return false;
  }

  render() {
    return (
      <div className="column">
        <div className="colHeading">{this.props.columnType}</div>
        <div className="cardContainer" onDrop={this.handleDrop} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave}>
          {this.props.cards
            .filter(card => card.status === this.props.columnType.toLowerCase())
            .map(card =>
              <Card
                key={card.id}
                handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit}
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


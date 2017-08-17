import React from "react";
import { connect } from "react-redux";
import Card from "../../components/card.js";

class InQueue extends React.Component {

  render() {
    return (
      <div className="inQueue">
      <div className="colHeading">In Queue</div>
      <div className="cardContainer">
        {this.props.cards
          .filter(card => card.status === "queue")
          .map(card => <Card key={card.id} handleDelete={ this.props.handleDelete }{...card} />)}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

InQueue = connect(mapStateToProps, mapDispatchToProps)(InQueue);

export default InQueue;

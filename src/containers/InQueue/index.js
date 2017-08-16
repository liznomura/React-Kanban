import React from "react";
import { connect } from "react-redux";
import Card from "../../components/card.js";

class InQueue extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // handler for status

  // handler for priority

  // deleting card
  // handleDelete(e) {

  // }

  render() {
    return (
      <div className="inQueue">
        {this.props.cards
          .filter(card => card.status === "queue")
          .map(card => <Card key={card.id} {...card} />)}
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

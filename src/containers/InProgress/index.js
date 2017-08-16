import React from "react";
import { connect } from "react-redux";
import Card from "../../components/card.js";

class InProgress extends React.Component {
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
      <div className="inProgress">
        {this.props.cards
          .filter(card => card.status === "progress")
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

InProgress = connect(mapStateToProps, mapDispatchToProps)(InProgress);

export default InProgress;

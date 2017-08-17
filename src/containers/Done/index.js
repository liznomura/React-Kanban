import React from "react";
import { connect } from "react-redux";
import Card from "../../components/card.js";

class Done extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="done">
      <div className="colHeading">Done</div>
        {this.props.cards
          .filter(card => card.status === "done")
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

Done = connect(mapStateToProps, mapDispatchToProps)(Done);

export default Done;
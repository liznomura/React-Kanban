import React from "react";
import { connect } from "react-redux";
import Card from "../../components/card.js";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // handler for status

  // handler for priority

  // deleting card

  render() {
    return (<div>
        {this.props.cards.map(card => <Card key={card.id} {...card} />)}
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
  return {

  };
};

CardContainer = connect(mapStateToProps, mapDispatchToProps)(CardContainer);

export default CardContainer;

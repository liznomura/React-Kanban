import { React, Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/card.js';

class Card extends Component {
  constructor(props) {
    super(props);


    // bind functions here
  }

  // handler for status

  // handler for priority

  // deleting card

  render() {
    return(

      )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  //updating card here
}

Card = connect(mapStateToProps, mapDispatchToProps)(Card);

export default Card;
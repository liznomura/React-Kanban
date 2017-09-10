import { LOAD_CARDS, ADD_CARD, DEL_CARD } from '../actions';

const initialState = {
  columns: ['in queue', 'in progress', 'done'],
  cards: []
};

const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [ ...action.cards ] });

    case ADD_CARD:
      return Object.assign({}, state, { cards: [ ...state.cards, action.card ] });

    case DEL_CARD:
      let filteredCards = state.cards.filter(card => card.id !== parseInt(action.id, 10));
      return Object.assign({}, state, { cards: filteredCards });

    // case "EDIT_CARD":
    //   return state.map(card => {
    //     if (card.id !== action.id) {
    //       return card;
    //     }

    //     return {
    //       id: action.id,
    //       title: action.title,
    //       priority: action.priority,
    //       createdBy: action.createdBy,
    //       assignedTo: action.assignedTo,
    //       status: action.status
    //     };
    //   });

    default:
      return state;
  }
};

export default kanbanReducer;

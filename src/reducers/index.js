const initialState = {
  cards: []
};

const kanbanReducer = (state = initialState, action) => {
  console.log('action in reducer', action.id)
  switch (action.type) {
    case "ADD_CARD":
      return {
        cards: [ ...state.cards, action.card ]
      };

    case "DEL_CARD":
      let filteredCards = state.cards.filter(card => card.id !== parseInt(action.id));
      return {
        cards: filteredCards
      }

    case "EDIT_CARD":
      return state.map(card => {
        if (card.id !== action.id) {
          return card;
        }

        return {
          id: action.id,
          title: action.title,
          priority: action.priority,
          createdBy: action.createdBy,
          assignedTo: action.assignedTo,
          status: action.status
        };
      });

    default:
      return state;
  }
};

export default kanbanReducer;

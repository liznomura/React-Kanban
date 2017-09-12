import { LOAD_CARDS, ADD_CARD, DEL_CARD, MOVE_CARD, SET_DRAG } from '../actions'

const initialState = {
  dragging: false,
  columns: ['in queue', 'in progress', 'done'],
  cards: []
}

const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [ ...action.cards ] })

    case ADD_CARD:
      return Object.assign({}, state, { cards: [ ...state.cards, action.card ] })

    case DEL_CARD:
      return Object.assign({}, state,
        {
          cards: state.cards
            .filter(card =>
              card.id !== parseInt(action.id, 10)
            )
        }
      )

    case MOVE_CARD:
      return Object.assign({}, state,
        {
          cards: state.cards
            .map(card => {
              if(card.id === parseInt(state.dragging, 10)) {
                card.status = action.status
              }

              return card
            })
        }
      )

      case SET_DRAG:
        return Object.assign({}, state, { dragging: action.current })


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
      return state
  }
};

export default kanbanReducer

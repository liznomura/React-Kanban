import { LOAD_CARDS, ADD_CARD, EDIT_CARD, DEL_CARD, MOVE_CARD, SET_DRAG } from '../actions'

const initialState = {
  dragging: false,
  columns: ['in queue', 'in progress', 'done'],
  cards: [{
    id:1,
status:"in queue",
title:"test",
priority:"low",
createdBy:"test",
assignedTo:"test"
  }]
}

const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [ ...action.cards ] })

    case ADD_CARD:
      return Object.assign({}, state, { cards: [ ...state.cards, action.card ] })

    // case EDIT_CARD:
    //   return Object.assign({}, state,
    //   {
    //     cards: state.cards
    //       .map(card => {
    //         if(card.id === )
    //       })
    //   }
    //   )
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

    case DEL_CARD:
      return Object.assign({}, state,
        {
          cards: state.cards
            .filter(card =>
              card.id !== action.id
            )
        }
      )

    case MOVE_CARD:
      return Object.assign({}, state,
        {
          cards: state.cards
            .map(card => {
              if(card.id === state.dragging) {
                card.status = action.status
              }

              return card
            })
        }
      )

      case SET_DRAG:
        return Object.assign({}, state, { dragging: action.current })

    default:
      return state
  }
};

export default kanbanReducer

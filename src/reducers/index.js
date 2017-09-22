import { LOAD_CARDS, ADD_CARD, EDIT_CARD, DEL_CARD, MOVE_CARD, SET_DRAG, TOGGLE_EDIT, ADD_COLUMN, EDIT_COLUMN_TITLE } from '../actions'

const initialState = {
  editing: false,
  dragging: false,
  columns: ['in queue', 'in progress', 'done'],
  cards: [
    {
      id:0,
      status:"in queue",
      title:"Do your work!",
      priority:"high",
      createdBy:"me",
      assignedTo:"you"
    }
  ]
}

const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [ ...action.cards ] })

    case ADD_CARD:
      return Object.assign({}, state, { cards: [ ...state.cards, action.card ] })

    case EDIT_CARD:
      return Object.assign({}, state,
        {
          cards: state.cards
            .map(card => {
              if(card.id === action.card.id) {
                card = {...action.card}
              }

              return card
            })
        }
      )

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

      case TOGGLE_EDIT:
        return Object.assign({}, state, { editing: action.current })

      case ADD_COLUMN:
        return Object.assign({}, state, { columns: [...state.columns, action.colTitle] })

      case EDIT_COLUMN_TITLE:
        let copyArr = state.columns.slice();
        copyArr[action.colId] = action.newTitle;
        return Object.assign({}, state, { columns: copyArr })

    default:
      return state
  }
};

export default kanbanReducer

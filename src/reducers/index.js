import { ADD_CARD, EDIT_CARD, DEL_CARD, MOVE_CARD, SET_DRAG, TOGGLE_EDIT, ADD_COLUMN, EDIT_COLUMN_TITLE, DEL_COLUMN } from '../actions'

const initialState = {
  editing: false,
  dragging: false,
  columns: ['in queue', 'in progress', 'done'],
  cards: [
    {
      id:0,
      status:"in queue",
      title:"Add your first task!",
      priority:"high",
      createdBy:"Me",
      assignedTo:"You"
    }
  ]
}
/*
const state = {
  columns: [
    {
      id: 1,
      title: 'in queue',
      cards: [
        {
          id: 1,
          colId: 1,
          title: 'Add your first task!',
          priority: 'high',
          createdBy: 'Me',
          assignedTo: 'You'
        },
        {
          id: 2,
          colId: 1,
          title: 'Second task in queue',
          priority: 'low',
          createdBy: 'Liz',
          assignedTo: 'Anyone'
        }
      ]
    },
    {
      id: 2,
      title: 'in progress',
      cards: []
    },
    {
      id: 3,
      title: 'done',
      cards: []
    }
  ]
}
*/

const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return Object.assign({}, state,
        {
          cards: [...state.cards, action.card]
        }
      )

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
        if(state.editing === false) {
          return Object.assign({}, state, { editing: action.current })
        } else {
          return Object.assign({}, state, { editing: false })
        }

      case ADD_COLUMN:
        return Object.assign({}, state, { columns: [...state.columns, action.colTitle] })

      case EDIT_COLUMN_TITLE:
        let copyArr = state.columns.slice();
        copyArr[action.colId] = action.newTitle;
        return Object.assign({}, state, { columns: copyArr })

      case DEL_COLUMN:
        console.log(action)
        return Object.assign({}, state,
          {
            columns: state.columns
              .filter((column, i) =>
                i !== action.colId
              )
          }
        )

    default:
      return state
  }
};

export default kanbanReducer

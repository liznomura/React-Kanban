import { ADD_CARD, EDIT_CARD, DEL_CARD, MOVE_CARD, SET_DRAG, TOGGLE_EDIT, ADD_COLUMN, EDIT_COLUMN_TITLE, DEL_COLUMN, TOGGLE_POPUP } from '../actions'

const initialState = {
  editing: false,
  dragging: false,
  showPopup: false,
  columns: [
    {
      id:0,
      title:'in queue'
    },
    {
      id:1,
      title:'in progress'
    },
    {
      id:2,
      title:'done'
    }
  ],
  cards: [
    {
      id:0,
      colId:0,
      title:"Add your first task!",
      priority:"high",
      createdBy:"Me",
      assignedTo:"You"
    }
  ]
}


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
              if (card.id === action.card.id) {
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
              if (card.id === state.dragging) {
                card.colId = action.colId
              }

              return card
            })
        }
      )

      case SET_DRAG:
        return Object.assign({}, state, { dragging: action.current })

      case TOGGLE_EDIT:
        if (state.editing === false) {
          return Object.assign({}, state, { editing: action.current })
        } else {
          return Object.assign({}, state, { editing: false })
        }

      case ADD_COLUMN:
        return Object.assign({}, state, { columns: [...state.columns, action.col] })

      case EDIT_COLUMN_TITLE:
        let copyArr = state.columns.slice();

        return Object.assign({}, state,
          { columns: copyArr
            .map(copyCol => {
              if (copyCol.id === action.colId) {
                copyCol.title = action.newTitle
              }

              return copyCol
            })
          }
        )

      case DEL_COLUMN:
        return Object.assign({}, state,
          {
            columns: state.columns
              .filter((column, i) =>
                column.id !== action.colId
              )
          }
        )

      case TOGGLE_POPUP:
        return Object.assign ({}, state, { showPopup: !state.showPopup })

    default:
      return state
  }
};

export default kanbanReducer

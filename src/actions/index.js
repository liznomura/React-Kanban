//action types
export const ADD_CARD = 'ADD_CARD'
export const DEL_CARD = 'DEL_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const LOAD_CARDS = 'LOAD_CARDS'
export const MOVE_CARD = 'MOVE_CARD'
export const SET_DRAG = 'SET_DRAG'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'

// note for later:
//   add new columns by adding title to state.columns

//action creators
let nextCardId = 0

// export const loadCards = () => {
//   return dispatch => {
//     fetch('/cards')
//       .then(cards => cards.json())
//       .then(cards => {
//         dispatch({
//           type: LOAD_CARDS,
//           cards
//         });
//       })
//       .catch(err => console.log(err));
//   };
// };

export const addCard = card => {
  nextCardId++
  return {
    type: ADD_CARD,
    card: { id: nextCardId, status: 'in queue', ...card }
  }
}

export const delCard = id => {
  return {
    type: DEL_CARD,
    id
  }
}

export const editCard = card => {
  return {
    type: EDIT_CARD,
    card: { ...card }
  }
}


export const moveCard = status => {
  return {
    type: MOVE_CARD,
    status
  }
}

export const setDrag = current => {
  return {
    type: SET_DRAG,
    current
  }
}

export const toggleEdit = current => {
  return {
    type: TOGGLE_EDIT,
    current
  }
}
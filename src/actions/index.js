//action types
export const ADD_CARD = 'ADD_CARD'
export const DEL_CARD = 'DEL_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const LOAD_CARDS = 'LOAD_CARDS'
export const MOVE_CARD = 'MOVE_CARD'
export const SET_DRAG = 'SET_DRAG'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export const ADD_COLUMN = 'ADD_COLUMN'
export const EDIT_COLUMN_TITLE = 'EDIT_COLUMN_TITLE'
export const DEL_COLUMN = 'DEL_COLUMN'
export const TOGGLE_ERRORPOPUP = 'TOGGLE_ERRORPOPUP'
export const TOGGLE_INITIALPOPUP = 'TOGGLE_INITIALPOPUP'

//action creators
let nextCardId = 0
let nextColId = 2

export const addCard = card => {
  nextCardId++
  return {
    type: ADD_CARD,
    card: { id: nextCardId, colId: 0, ...card }
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


export const moveCard = colId => {
  return {
    type: MOVE_CARD,
    colId
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

export const addColumn = colTitle => {
  nextColId++
  return {
    type: ADD_COLUMN,
    col: { id: nextColId, title: colTitle }
  }
}

export const editColumnTitle = (colId, newTitle) => {
  return {
    type: EDIT_COLUMN_TITLE,
    colId,
    newTitle
  }
}

export const delColumn = colId => {
  return {
    type: DEL_COLUMN,
    colId
  }
}

export const toggleErrorPopup = () => {
  return {
    type: TOGGLE_ERRORPOPUP
  }
}

export const toggleInitialPopup = () => {
  return {
    type: TOGGLE_INITIALPOPUP
  }
}
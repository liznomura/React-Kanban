//action types
export const ADD_CARD = "ADD_CARD";
export const DEL_CARD = "DEL_CARD";
export const EDIT_CARD = "EDIT_CARD";

//action creators
let nextCardId = 0;

export const addCard = card => {
  console.log(nextCardId);
  console.log(card);
  nextCardId++;
  return {
    type: ADD_CARD,
    card: {id: nextCardId, status: "queue", ...card}
  };
};

export const delCard = id => {
  console.log(id)
  return {
    type: DEL_CARD,
    id
  };
};

export const editCard = card => {
  return {
    type: EDIT_CARD,
    ...card
  };
};

let nextCardId = 0;

//action types
export const ADD_CARD = 'ADD_CARD';
export const DEL_CARD = 'DEL_CARD';
export const EDIT_CARD = 'EDIT_CARD';

//action creators
export const addCard = (card) => {
  console.log(card);
  return {
    type: ADD_CARD,
    id: nextCardId++,
    status: 'queue',
    ...card
  };
};

export const delCard = (id) => {
  return {
    type: DEL_CARD,
    id
  };
};

export const editCard = (card) => {
  return {
    type: EDIT_CARD,
    ...card
  };
};

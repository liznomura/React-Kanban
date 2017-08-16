const kanbanReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          priority: action.priority,
          createdBy: action.createdBy,
          assignedTo: action.assignedTo,
        }
      ];

    case 'DEL_CARD':
      return state.filter(card => card.id !== action.id);

    case 'EDIT_CARD':
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

    // case 'MOVE_CARD':
    //   ;

    default:
      return state;
  }
};

export default kanbanReducer;

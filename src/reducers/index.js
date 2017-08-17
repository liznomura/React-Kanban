const kanbanReducer = (state = [], action) => {
  console.log('hitting reducer', action);
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
          status: action.status
        }
      ];

    case 'DEL_CARD':
    console.log('hitting reducer');
      let filter = state.filter(card => card.id !== parseInt(action.id));
      return filter;

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

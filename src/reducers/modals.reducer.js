function modalsReducer(state = { isOpen: false }, action) {
  switch (action.type) {
    case "OPEN_EDIT_MODAL":
      return { ...state, isOpen: true, id: action.payload.id };
    case "CLOSE_EDIT_MODAL":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export default modalsReducer;

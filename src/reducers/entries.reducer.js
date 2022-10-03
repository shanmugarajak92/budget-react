import entryType from "../types/entryTypes";

function entriesReducer(state = initialEntries, action) {
  let newEntries;
  switch (action.type) {
    case entryType.POPULATE_ENTRY:
      return action.payload.data;
    case entryType.ADD_ENTRY:
      newEntries = state.concat(action.payload);
      return newEntries;
    case entryType.REMOVE_ENTRY_RESULT:
      return state.filter((e) => e.id !== action.payload.id);
    case entryType.POPULATE_ENTRY_DETAILS:
    case entryType.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex((e) => e.id === action.payload.id);
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
}

export default entriesReducer;

let initialEntries = [];

import entryType from "../types/entryTypes";

export const addEntryRedux = (payload) => {
  return { type: entryType.ADD_ENTRY, payload };
};

export const removeEntryRedux = (id) => {
  return { type: entryType.REMOVE_ENTRY, payload: { id } };
};

export const updateEntryRedux = (id, entry) => {
  return { type: entryType.UPDATE_ENTRY, payload: { id, entry } };
};

export const getAllEntries = () => {
  return { type: entryType.GET_ENTRIES };
};

export const populateEntry = (entries) => {
  return { type: entryType.POPULATE_ENTRY, payload: entries };
};

export const populateEntryDetails = (id, entry) => {
  return {
    type: entryType.POPULATE_ENTRY_DETAILS,
    payload: { id, entry },
  };
};

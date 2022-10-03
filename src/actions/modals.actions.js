import modalType from "../types/modalTypes";

export const openEditModal = (id) => {
  return { type: modalType.OPEN_EDIT_MODAL, payload: { id } };
};

export const closeEditModal = () => {
  return { type: modalType.CLOSE_EDIT_MODAL };
};

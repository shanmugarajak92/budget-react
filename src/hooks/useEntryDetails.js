import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { closeEditModal } from "../actions/modals.actions";

function useEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetEntry();
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuid(),
        description,
        value,
        isExpense,
      })
    );
    resetEntry();
  }
  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }
  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
}

export default useEntryDetails;

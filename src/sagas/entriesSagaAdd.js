import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import entryType from "../types/entryTypes";

export function* addEntrySaga() {
  yield takeLatest(entryType.ADD_ENTRY, addEntrytoDb);
}

function* addEntrytoDb({ payload }) {
  yield call(addEntry, payload);
  yield call(addEntryDetails, payload);
  yield put({ type: entryType.ADD_ENTRY_RESULT, payload });
}

async function addEntry({ id, description }) {
  await axios.post("http://localhost:3001/entries", {
    id,
    description,
  });
}

async function addEntryDetails({ id, isExpense, value }) {
  await axios.post("http://localhost:3001/values", {
    id,
    isExpense,
    value,
  });
}

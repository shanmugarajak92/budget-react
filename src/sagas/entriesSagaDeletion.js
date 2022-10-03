import axios from "axios";
import { call, take, put } from "redux-saga/effects";
import entryType from "../types/entryTypes";

export function* deleteEntrySaga() {
  while (true) {
    const { payload } = yield take(entryType.REMOVE_ENTRY);
    yield call(deleteEntry, payload.id);
    yield put({ type: "REMOVE_ENTRY_RESULT", payload: { id: payload.id } });
  }
}

async function deleteEntry(id) {
  await axios.delete(`http://localhost:3001/entries/${id}`);
  await axios.delete(`http://localhost:3001/values/${id}`);
  await new Promise((s) => setTimeout(s, 2000));
}

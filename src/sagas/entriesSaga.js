import entryType from "../types/entryTypes";
import { take, call, put, fork } from "redux-saga/effects";
import axios from "axios";
import {
  populateEntry,
  populateEntryDetails,
} from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entryType.GET_ENTRIES);
  console.log("Entries now");
  const data = yield call(axios, "http://localhost:3001/entries");
  yield put(populateEntry(data));
}

export function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  console.log(data);
  yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entryType.POPULATE_ENTRY);
  console.log("payload", payload.data);
  for (let index = 0; index < payload.data.length; index++) {
    const entry = payload.data[index];
    yield fork(getEntryDetails, entry.id);
  }
}

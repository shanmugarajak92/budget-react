import * as entriesSaga from "./entriesSaga";
import * as deleteEntrySaga from "./entriesSagaDeletion";
import * as addEntrySaga from "./entriesSagaAdd";
export function initSagas(sagaMiddleware) {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(deleteEntrySaga).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(addEntrySaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}

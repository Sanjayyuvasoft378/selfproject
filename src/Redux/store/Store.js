import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Reducer";
import rootSaga from "../saga";
const sagaMiddleware = createSagaMiddleware();
export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
    sagaMiddleware.run(rootSaga);
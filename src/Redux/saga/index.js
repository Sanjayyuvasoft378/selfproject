import {all} from "redux-saga/effects";
import { MySaga } from "./UserSaga";
export default function* rootSaga(){
    yield all([
        MySaga()
    ]);
}
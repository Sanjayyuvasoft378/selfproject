import { REGISTER_REQUEST, REGISTER_SUCCESS } from "../ActionType";
import { put,takeEvery } from "redux-saga/effects";
function*  UserSignup(action) {
    yield put ({
        type:REGISTER_SUCCESS,
        payload:action.payload,
    })
}
export function* MySaga() {
    yield takeEvery(REGISTER_REQUEST,UserSignup());
}
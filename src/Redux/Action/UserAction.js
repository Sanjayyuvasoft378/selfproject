import { REGISTER_REQUEST, REGISTER_SUCCESS } from "../ActionType"

export const Signuppage = (data) => {
    return {
        type:REGISTER_REQUEST,
        payload: data
    }
}
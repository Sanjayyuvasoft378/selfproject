import { REGISTER_SUCCESS } from "../ActionType"

const initialState = {
    Register_user:localStorage.getItem("User_Info")
    ? JSON.parse(localStorage.getItem("User_Info"))
    :[],
    isAuth:localStorage.getItem("token")
}
const Reducer = (state = initialState,action) => {
    switch (action.type){
        case REGISTER_SUCCESS:
            const data = state.Register_user;
            data.push(action.payload);
            localStorage.setItem("User_Info", JSON.stringify(data));
            return {
                ...state,
                Register_user:[...data],
                create:action.payload
            };
            default:
                return state
    }
};
export default Reducer;
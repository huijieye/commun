const initialState = {
    loading:false,
    user:null,
    error:false
}

function loginReducer(state = initialState, action) {
    switch (action.type){
        case "user_fetch_login":
            return {
                ...state,
                loading:true
            }

        case "user_login_succes":
            return {
                ...state,
                loading:false,
                user: action.user
            }
        case "user_login_error":
            return {
                ...state,
                loading:false,
                error: action.error
            }
        case "user_login_out":
            return {
                ...state,
                loading:false
            }
        default:
            return state
    }

}
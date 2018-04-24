export function fetchLogin() {
    return {
        type:"user_fetch_login"
    }
}

export function loginSucces(user) {
    return {
        type:"user_login_succes",
        user
    }
}

export function loginFail(error) {
    return {
        type:"user_login_error",
        error
    }
}

export function loginOut() {
    return {
        type:"user_login_out",
    }
}
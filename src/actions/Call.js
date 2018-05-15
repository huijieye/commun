export function fetchCreate() {
    return {
        type:"call_fetch_create"
    }
}

export function createSucces(call) {
    return {
        type:"call_create_succes",
        call
    }
}

export function createFail(error) {
    return {
        type:"call_create_error",
        error
    }
}

export function fetchDelete() {
    return {
        type:"call_fetch_delete"
    }
}

export function deleteSucces(user) {
    return {
        type:"call_delete_succes",
        user
    }
}

export function deleteFail(error) {
    return {
        type:"call_delete_error",
        error
    }
}

export function fetchShow() {
    return {
        type:"call_fetch_show"
    }
}

export function showSucces(list) {
    return {
        type:"call_show_succes",
        list
    }
}

export function showFail(error) {
    return {
        type:"call_show_error",
        error
    }
}
import {fetchLogin,loginSucces,loginFail,loginOut} from '../actions/User';
import axios from 'axios';

export function loginProcess(dispatch,login) {
    dispatch(fetchLogin())
    axios.get('https://noodledistress.herokuapp.com/user/login/'+login).then(res => {
        dispatch(loginSucces(res))
    }).catch(error => {
        dispatch(loginFail(error))
    })
}

export function loginOutProcess(dispatch) {
    dispatch(loginOut())
}
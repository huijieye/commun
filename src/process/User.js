import {fetchLogin,loginSucces,loginFail,loginOut} from '../actions/User';
import axios from 'axios';

export function loginProcess(dispatch,login) {
    dispatch(fetchLogin())

    axios.get('https://noodledistress.herokuapp.com/user/login/'+login).then(res => {
        if(res.status === 200){
            dispatch(loginSucces(res.data))
        }
        else{
            dispatch(loginFail('erreur'))
        }
    }).catch(error => {
        dispatch(loginFail(error))
    })
}

export function loginOutProcess(dispatch) {
    dispatch(loginOut())
}
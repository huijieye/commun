import {fetchLogin,loginSucces,loginFail,loginOut} from '../actions/User';
import axios from 'axios';

export function loginProcess(dispach,login) {
    dispach(fetchLogin())

}
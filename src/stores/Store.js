import {createStore,combineReducers} from 'redux'
import {loginReducer} from '../reducers/User'

const reducers = combineReducers({
    user:loginReducer
})
const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
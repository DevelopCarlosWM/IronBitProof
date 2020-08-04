import { 
    combineReducers, 
    createStore
}from 'redux'
import userToDoList from './reducers/userToDoList'
const reducer=combineReducers({
    userToDoList,
})
const store=createStore(reducer)
export default store
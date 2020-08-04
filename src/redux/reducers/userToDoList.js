import {ADD, REMOVE, REMOVE_ALL} from '../actions/findUserToDoList'
const reducer= ( state=[], action={} )=>{
    switch( action.type ) {
        case ADD: 
            return [
                ...state,
                action.payload
            ]
        case REMOVE:
            return [
                ...state.slice(0,action.payload),
                ...state.slice(action.payload + 1)
            ]
        case REMOVE_ALL:
            return action.payload
        default:
            return state;
    }
}
export default reducer
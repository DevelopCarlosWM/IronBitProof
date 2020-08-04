export const ADD='findUserToDoListAdd'
export const REMOVE='findUserToDoListRemove'
export const REMOVE_ALL='findUserToDoListRemoveAll'
export function findUserToDoListAdd({title,createdAt}){
    return {
        type: ADD,
        payload: {title, createdAt}
    }
}
export function findUserToDoListRemove(index){
    return{
        type: REMOVE,
        payload: index
    }
}
export function findUserToDoListRemoveAll(newState){
    return{
        type: REMOVE_ALL,
        payload: newState
    }
}
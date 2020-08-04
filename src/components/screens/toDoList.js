import React from 'react'
import Header from '../sections/header'
import AddTask from '../sections/addTask'
import TasksList from '../sections/tasksList'
class ToDoList extends React.Component{
    constructor( props ){
        super( props )
    }
    render(){
        return(
            <>
                <div style={{paddingRight:10, paddingLeft:10, paddingBottom:20}}>
                    <Header/>
                    <AddTask/>
                    <TasksList/>
                </div>
            </>
        )
    }
}
export default ToDoList
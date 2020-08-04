import React from 'react'
import{
    Input,
    Grid,
    Button,
    IconButton,
    Snackbar
}from '@material-ui/core'
import { connect } from 'react-redux'
import {findUserToDoListAdd} from '../../redux/actions/findUserToDoList'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
const AddTask= ( props )=>{
    let [ task, setTask ]=React.useState('')
    let [ disabled, setDisabled ]=React.useState(true)
    const addTask= () =>{
        let date= new Date()
        const createdAt=date.getDate() + '/'+ date.getMonth() + '/' + date.getFullYear()
        const myTask={
            title:task,
            createdAt
        }
        props.findUserToDoListAdd(myTask)
        setTask('')
        setDisabled(true)
        handleClick()
        console.log(props.userTasks)
    }
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };
    return(
        <>
            <Grid container alignItems='center' justify='center' style={{marginTop:20}}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <div style={{padding:10}}>
                        <Input
                            style={{width:'70%', textAlign:'center'}}
                            placeholder='Agrega una nueva tarea'
                            value={task}
                            onChange={(e)=>{
                                setTask(e.target.value)
                            }}
                            onBlur={()=>{
                                if(task){
                                    setDisabled(false)
                                }else{
                                    setDisabled(true)
                                }
                            }}
                            onKeyPress={(e)=>{
                                if(e.key=== 'Enter' && task){
                                    addTask()
                                }
                            }}
                        />
                        <Button endIcon={<AddCircleIcon/>} variant='contained' onClick={()=>{addTask()}} disabled={disabled} style={{backgroundColor:'#21b2aa', width:'25%', marginLeft:10}}>
                            Agregar
                        </Button>
                    </div>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{
                vertical: 'Bottom',
                horizontal: 'center',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Tarea agregada"
                action={
                <>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                    </IconButton>
                </>
                }
            />
        </>
    )
}
const mapStateToProps=state=>{
    return({
        userTasks:state.userToDoList,
    })
}
const mapDispatchToProps={
    findUserToDoListAdd
}
export default connect( mapStateToProps, mapDispatchToProps ) ( AddTask )
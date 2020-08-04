import React from 'react'
import{
    Grid,
    IconButton,
    Typography,
    Divider,
    Paper
}from '@material-ui/core'
import { connect } from 'react-redux'
import { findUserToDoListRemove,findUserToDoListRemoveAll } from '../../redux/actions/findUserToDoList'
import CancelIcon from '@material-ui/icons/Cancel';
const TasksList= ( props ) =>{
    React.useEffect(()=>{
        console.log(props)
    },[])
    const removeTask= (key) =>{
        console.log(key)
        props.findUserToDoListRemove(key)
        console.log(props.userTasks)
    }
    const removeAllTasks= () =>{
        const emptyArray=[]
        props.findUserToDoListRemoveAll(emptyArray)
    }
    return(
        <>
            <Grid container alignItems='center' justify='center' style={{marginTop:20}}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Paper elevation={5} style={{width:'100%', borderRadius:'1rem'}}>
                        <div style={{ display:'flex', flexDirection:'row', backgroundColor:'#adff2e',borderTopLeftRadius:'1rem', borderTopRightRadius:'1rem'}}>
                            <div style={{padding:15}}>
                                <Typography variant='body1' component='div'>ToDo List by IronBit</Typography>
                            </div>
                                <IconButton style={{marginLeft:'auto'}} onClick={()=>{removeAllTasks()}}>
                                    <img
                                        src={require('../../assets/recycle-bin.svg')}
                                        style={{width:25}}
                                    />
                                </IconButton>
                        </div>
                        {props.userTasks.length>0 ? (
                            <Grid container>
                            {props.userTasks.map((task, key)=>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={key}>
                                    <Grid container>
                                        <Grid item xs={9} sm={9} md={10} lg={10} xl={10}>
                                            <div style={{display:'flex', flexDirection:'row', padding:10}}>
                                                <Typography variant='body1' component='div'>{task.title}</Typography>
                                                <Typography variant='body1' component='div' style={{marginLeft:'auto'}}>{task.createdAt}</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
                                            <div style={{textAlign:'left'}}>
                                                <IconButton onClick={()=>{removeTask(key)}}>
                                                    <CancelIcon style={{color:'red'}}/>
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Divider style={{marginTop:10}}/>
                                </Grid>
                            )}
                        </Grid>
                        ):(
                            <div style={{textAlign:'center', padding:20}}>
                                <Typography variant='body1' component='div'>Aún no tienes tareas agregadas</Typography>
                            </div>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
const mapStateToProps=state=>{
    return({
        userTasks:state.userToDoList
    })
}
const mapDispatchToProps={
    findUserToDoListRemove,
    findUserToDoListRemoveAll
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksList)
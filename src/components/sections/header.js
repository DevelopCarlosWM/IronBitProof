import React from 'react'
import {
    Grid,
    Typography
}from '@material-ui/core'
const Header=() =>{
    return(
        <> 
            <Grid container alignItems='center' justify='center'>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div style={{textAlign:'center', padding:30}}>
                        <div>
                            <img
                                src={require('../../assets/ico-logo.png')}
                            />
                        </div>
                        <Typography variant='h5' component='div' style={{color:'white', fontWeight:'bold'}}>Frontend Test</Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default Header
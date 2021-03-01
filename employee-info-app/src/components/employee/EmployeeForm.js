import { Grid, TextField,Button } from '@material-ui/core'
import React,{useState, useEffect} from 'react'
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const EmployeeForm = () => {

    
    
    return (
        <form>
            <Grid container> 
                <Grid item xs={8}>
                    <TextField 
                        variant="outlined"
                        label="Employee Name"
                        size="medium"
                       />
                </Grid>
                <Grid item xs={2}>
                    
                </Grid>
            </Grid>
        </form>
    )
}

export default EmployeeForm

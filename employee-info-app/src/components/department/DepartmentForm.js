import { Grid, TextField,Button } from '@material-ui/core'
import React,{useState, useEffect} from 'react'
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import axios from "axios"

const DepartmentForm = () => {

    const [ department, setDepartment] = useState({
        DepartmentId: null,
        DepartmentName: ""
    });

    const handleSubmit = async(e,department) =>{
      e.preventDefault();
        
        const response = await axios.post(`https://localhost:44316/api/department`,department)
            .then(function(response){
                console.log(response)
            })

       
        console.log(department)
        setDepartment(" ")
    }
    return (
        <form>
            <Grid container> 
                <Grid item xs={8}>
                       <TextField 
                            variant="outlined"
                            label="Department Name"
                            size="medium"
                            fullWidth
                            onChange={(e)=>setDepartment({DepartmentName :e.target.value})}
                            value = {department.DepartmentName}
                        />
                </Grid>
                <Grid item xs={4}>
                        <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<SaveIcon />}
                                onClick={(e)=>handleSubmit(e,department)}
                            >
                                Save
                        </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default DepartmentForm

import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

const DepartmentTable = () => {

const [ departments, setDepartments ] = useState("");

const classes = useStyles();



 useEffect(()=>{
  const getData = async()=>{
    const {data} = await axios.get('https://localhost:44316/api/department')
  
    setDepartments(data);
  }
    getData();
},[departments]);

// const getData =async()=>{
//     const {data} = await axios.get('https://localhost:44316/api/department')
//     setDepartments(data)
//     console.log(departments);
// }
// setDepartments(getData())


const handleDelete=async(departmentID)=>{
  const res = await axios.delete(`https://localhost:44316/api/department/${departmentID}`)
  console.log(res)

 
}

    return (departments.length)?(
     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Department ID</TableCell>
            <TableCell align="center">Department Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            departments.map(department=>(
                  <TableRow key={department.DepartmentId}>
                        <TableCell align="center">{department.DepartmentId}</TableCell>
                        <TableCell align="center">{department.DepartmentName}</TableCell>
                        <IconButton aria-label="delete" onClick={()=>handleDelete(department.DepartmentId)}>
                           <DeleteIcon color="error"/>
                        </IconButton>
                        <IconButton  aria-label="edit">
                           <EditIcon color="primary"/>
                        </IconButton>
                  </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    

    ):(<div>No data found</div>)
}

export default DepartmentTable

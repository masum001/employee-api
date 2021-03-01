import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles,Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
//import DeleteIcon from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

const EmployeeTable = () => {

const [ employees, setEmployees ] = useState("");

const classes = useStyles();
useEffect(()=>{
    const getData = async()=>{
        const {data} = await axios.get('https://localhost:44316/api/employee')
        console.log(data)
        setEmployees(data);
    }
    getData();
},[]);


const handleDelete=async(id)=>{
  const res = await axios.delete(`https://localhost:44316/api/employee/${id}`)
  console.log(res)
}

    return (
    (employees.length > 0) && (
     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Employee ID</TableCell>
            <TableCell align="center">Employee Name</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Mail ID</TableCell>
            <TableCell align="center">Date of Joining</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            employees.map(employee=>(
                  <TableRow key={employee.EmployeeID}>
                        <TableCell align="center">{employee.EmployeeID}</TableCell>
                        <TableCell align="center">{employee.EmployeeName}</TableCell>
                        <TableCell align="center">{employee.Department}</TableCell>
                        <TableCell align="center">{employee.MailID}</TableCell>
                        <TableCell align="center" >{employee.DOj}</TableCell>
                        <IconButton aria-label="delete" onClick={()=>handleDelete(employee.EmployeeID)}>
                           <DeleteIcon color="error"/>
                        </IconButton>
                        <IconButton aria-label="edit">
                           <EditIcon color="primary"/>
                        </IconButton>
                  </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    
    ))
        
    
        
     
}

export default EmployeeTable

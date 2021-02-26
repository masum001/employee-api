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

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

const Department = () => {

const [ departments, setDepartments ] = useState("");

const classes = useStyles();
useEffect(()=>{
    const getData = async()=>{
        const {data} = await axios.get('https://localhost:44316/api/department')
        console.log(data)
        setDepartments(data);
    }
    getData();
},[]);

// const getData =async()=>{
//     const {data} = await axios.get('https://localhost:44316/api/department')
//     setDepartments(data)
//     console.log(departments);
// }
// setDepartments(getData())

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
                  </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    

    ):(<div>No data found</div>)
}

export default Department

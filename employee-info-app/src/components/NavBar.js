import React from 'react'
import { Toolbar, Typography, Button, AppBar, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'


const useStyles = makeStyles(()=>({
    root : {
        flexGrow : 1
    },
    title : {
        flex : 1
    }
}))
const NavBar = () => {


    const classes = useStyles();
    return (
        <div className={classes.root} style={{ marginBottom : 10}}>
          <AppBar position="static">
            <Toolbar >
              <Typography className={classes.title} variant="h6">
                Employee Information System
              </Typography>
              <Button color="inherit" component = {Link} to='./home'>Home</Button>
              <Button color="inherit" component ={Link} to='/employee'>Employee</Button>
              <Button color="inherit" component ={Link} to='/department'>Depratment</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}

export default NavBar

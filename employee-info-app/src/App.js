
import './App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Switch, Link, Route } from 'react-router-dom'
import Employee from './components/employee/Employee'
import Home from './components/Home'
import Departmnet from './components/department/Department'
import {Grid} from '@material-ui/core'

function App() {
  return (
    <div className="App">
    <Grid container direction="column">
      <Grid item>
          <NavBar />
      </Grid>
      <Grid item container>
        <Grid item sm={2} xs={false}/>
            <Grid item sm={8} xs={12}>
                  <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/employee' component={Employee}/>
                    <Route path='/Department' component={Departmnet}/>
               </Switch>
            </Grid>
        <Grid item sm={2} xs={false}/>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;

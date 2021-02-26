
import './App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Switch, Link, Route } from 'react-router-dom'
import Employee from './components/Employee'
import Home from './components/Home'
import Departmnet from './components/Department'

function App() {
  return (
    <div className="App">
     <NavBar />


      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/employee' component={Employee}/>
        <Route path='/Department' component={Departmnet}/>
      </Switch>

    </div>
  );
}

export default App;

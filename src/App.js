
import './App.css';

import Home from '../src/pages/Home/Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ViewDetails from '../src/pages/ViewDetails/ViewDetails.jsx'


function App() {
  return (
    <div className="App">
      {/* <AddUser/> */}
      {/* <Router>
        <Switch>
          <Route path="/Home" component ={Home}></Route>
          <Route exact path="/" component ={AddUser}></Route>
        </Switch>
      </Router> */}
      {/* <Home/> */}
        <ViewDetails/>
{/* <EmployeeForm/>  */}
    </div>
  );
}

export default App;

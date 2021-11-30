
import './App.css';

import Home from '../src/pages/Home/Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ViewDetails from '../src/pages/ViewDetails/ViewDetails.jsx'


function App() {
  return (
    <div className="App">
     
        <ViewDetails/>

    </div>
  );
}

export default App;

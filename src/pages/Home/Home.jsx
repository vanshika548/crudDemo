import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import '../Home/Home.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';


function Home() {
    return (
        <div className="outerContainer">
            <NavBar/>  
            <div className="userList">
            <div className="details">
                <div className="fname">vvv</div>
                <div className="lname">ggggg</div>
                <div className="email">hhhhh</div>
                <div className="number">hhhhhhhhhh</div>
            </div>
            
                <div className="btns">
                    <Link className="edit" to="/" >Edit</Link>
                    <Button className="delete">Delete</Button>
                </div>     
            </div>
           
           
        </div>
        
    )
}

export default Home

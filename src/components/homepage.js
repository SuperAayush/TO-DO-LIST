import React from 'react'
import "../styling/homepage.css"
import {Link} from "react-location"
import Header from './header'
import Img1 from "../images/check.png"
import {Button} from "react-bootstrap"





const Homepage = () => {
    return (
        <div>
        <Header />
            <div className="container1">
                <img src={Img1} alt="" srcset="" className="chai" />
            <div className="heading1">
                <h1 className="organize">Organize it all <br /> with To-Do List</h1>
                <Link to="/login"><Button className="login_button" variant="outline-secondary">Login</Button></Link>
            </div>
        </div>
        </div>
            
            
    )
}

export default Homepage

import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

import {useAuth} from './Services/Context_Auth';


function Bar(){
    const {authToken} = useAuth();

    if(authToken){
        return(
            <nav className= "navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header"></div>
                    <ul className="nav navbar-nav navbar-right">
                        <a className="navbar-brand" href="#">Logout</a>  
                    </ul>
                </div>
            </nav>
        )
        }else{
            return(
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                    <div className="navbar-header"></div> 
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>
                </nav>
            )
        }

}

export default Bar;
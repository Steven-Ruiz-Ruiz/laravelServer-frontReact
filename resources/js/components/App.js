import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import {AuthContext} from './Services/Context_Auth';
import PrivateRoute from './PrivateRoutes';

import Index from './Index';
import Register from './Register';
import Home from './Home';
import Login  from './Login';

function App (props){
    const [authToken, setAuthToken]= useState();

    const setTokens = (data)=>{
        localStorage.setItem("tokens",JSON.stringify(data))
        setAuthToken(data);
    };

    return (
        <AuthContext.Provider value={{authToken, setAuthToken: setTokens}}>
            <Router>
                <div className='container'>
                    <nav className = 'navbar navbar-expand-lg navbar-light bg-light'>
                        
                        <div className='collpase navbar-collpase'>
                            <div className="navbar-header">
                                <h1>Publications Shop</h1>
                            </div>
                            <ul className='navbar-nav mr-auto'>
                                <li className='nav-item'><Link to="/" className='nav-link'>Index</Link></li>
                                <li className='nav-item'><Link to="/home" className='nav-link'>Home</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={Index}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <PrivateRoute path="/home" component={Home}/>
                </div>
            </Router>  
        </AuthContext.Provider>      
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Bar from './Bar';
import { Redirect } from 'react-router-dom';

import {useAuth} from './Services/Context_Auth';

function Login(){
    
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const {setAuthToken} = useAuth();
    
    function onSubmit (){
        useEffect(()=>{
            const params = {
                "email": email,
                "password": password,
                "remember_me": true
            };
            const headers = {
                'Content-Type' :'application/json',
                'X-Requested-With':'XMLHttpRequest'
            };

            axios.post('http://laravelServer.test/api/auth/login',params, {headers})
            .then(response =>{
                if(response.status === 200){
                    setAuthToken(response.data)
                    setLoggedIn(true);
                    console.log(response.data.access_token);
                }else{ 
                    setIsError(true);
                }         
            })
            .catch(error=>{
                setIsError(true)
                console.log(error)
                
            })        
        },[]);
    }
    if(isLoggedIn){
        return <Redirect to='/home'/>;
    };
    
    return (
        <div>
            <Bar/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                {isError &&
                                    <span>The username or password provider were incorrect {message}</span>
                                }

                                <form role="form" method="POST" onSubmit={onSubmit} encType='multipart/form-data'>
                    
                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail</label>
                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" name="email" value={email} onChange={e =>{setEmail(e.target.value)}} required autoComplete="email" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control"  value={password} name="password" onChange={e =>{setPassword(e.target.value)}} required />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                                                <label className="form-check-label" htmlFor="remember">
                                                    Remember me 
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;
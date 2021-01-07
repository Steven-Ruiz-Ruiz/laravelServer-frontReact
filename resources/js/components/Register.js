import React, { useState } from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
//import Bar from './Bar';
import "bootstrap/dist/css/bootstrap.min.css";

function Register(){
    
    const [_name, setName] = useState("");
    const [_email, setEmail] = useState("");
    const [_password, setPassword] = useState("");
    const [_passwordConfirm, setPasswordConfirm] = useState("");
    const [_error, setError] = useState(false);
    const [_isRegister, setIsRegister] = useState(false);
            
    //Enviar los datos recogidos en el estado por la ruta de la api 
    function onSubmit(e){
        e.preventDefault();
        let params = {
            name : _name,
            email: _email,
            password: _password,
            password_confirmation: _passwordConfirm,

        };

        axios.post('http://laravelServer.test/api/auth/register', params)
        .then(response =>{
            if(response.status === 201){
                setIsRegister(true)
                console.log(response.data.message)
            }
        })
        .catch(error =>{
            setError(true)
            console.log(error)
        })
    }

    if(_isRegister){
        return <Redirect to='/'/>;
    };

    let msg ="oops! Something went wrong";
    let name ='alert alert-danger';

    return (
        <div>
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h4>Register</h4>
                        </div>
                        <div className="card-body">

                            {_error &&
                            <div className={name} role="alert">
                                {msg}
                            </div>}

                            <form role="form" method="POST" onSubmit={onSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>
                                    <div className="col-md-6">
                                        <input id="name" type="text" className="form-control"  name="name" value={_name} onChange={e=>{setName(e.target.value)}} required autoComplete="name" autoFocus />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail</label>
                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" value={_email} name="email" onChange={e=>{setEmail(e.target.value)}} required autoComplete="email" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control"  value={_password} name="password" onChange={e=>{setPassword(e.target.value)}} required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password_confirmation" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                    <div className="col-md-6">
                                        <input id="password_confirmation" type="password" className="form-control" value={_passwordConfirm} name="password_confirmation" onChange={e=>{setPasswordConfirm(e.target.value)}} required/>
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">Register</button>
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

export default Register;

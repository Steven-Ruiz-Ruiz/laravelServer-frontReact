import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {useAuth} from './Services/Context_Auth';

function PrivateRoute({ component:Component, ...res}){
    const {authToken} = useAuth();

    return (
        <Route {...res} render = { props =>
            authToken ? (
                <Component {...props}/>
        ) : (
            <Redirect to='/login'/>
        )}
        />
    );
}

export default PrivateRoute;
import React, { Component } from 'react'
import AuthApi from './auth/Registration';

const Dashboard =() => {
    const Auth = React.useContext(AuthApi);

    const handleOnClick =() => {
        Auth.setAuth(false)
    }
        return (
            <div>
                <h1>Dashboard</h1>

            </div>
        )
    }
    export default Dashboard


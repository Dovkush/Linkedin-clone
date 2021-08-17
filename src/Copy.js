import React from 'react'
import AppBody from './AppBody'
import Login from './components/Login'
import {Route} from "react-router-dom";
function Copy() {
    return (
        <div>
            <Route exact to="/" component={AppBody}></Route>
            <Route exact to="/login" component={Login}></Route>
            
        </div>
    )
}

export default Copy

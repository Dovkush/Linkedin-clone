import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './components/Header';

import {Route,Switch,BrowserRouter} from "react-router-dom";
import AppBody from './AppBody';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    
  <>
    <Header></Header>
    <BrowserRouter>
    <Switch>
    <Route exact path="/signup" component={Signup}></Route>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/" component={AppBody}></Route>
    
    </Switch></BrowserRouter>
    
   </>
    
   
  );
}

export default App;

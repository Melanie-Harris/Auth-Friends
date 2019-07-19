import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from "axios";
import { axiosWithAuth} from './axiosAuth'
import { withFormik, Form, Field } from "formik";
import Login from "./components/pages/Login";
import FriendsList from "./components/pages/FriendsList";
import {PrivateRoute} from './components/PrivateRoute';


function App(touched, errors,) {
  return (
    <div>
    <Route path="/" component={Login} />
    <PrivateRoute path="/FriendsList" component={FriendsList} />
    
    </div>
  )
}

export default (App);

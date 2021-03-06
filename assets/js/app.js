import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import AuthContext from "./contexts/AuthContext";
import PostsPage from "./pages/PostsPage";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import AuthAPI from "./services/authAPI";

import RegisterPage from "./pages/RegisterPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/Home";
import CreatePage from "./pages/CreatePage";


require("../css/app.css");

AuthAPI.setup();


const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        AuthAPI.isAuthenticated()
    );

    const NavbarWithRouter = withRouter(Navbar);

    return ( <AuthContext.Provider value = {
            {
                isAuthenticated,
                setIsAuthenticated
            }
        } >
            <HashRouter >
                <NavbarWithRouter/>

                <main className = "container pt-5">
                <Switch>
                    <Route path = "/login"component = { LoginPage }/> <Route path = "/register"component = { RegisterPage }/>  
                    <Route path = "/home" component = { HomePage }/> <Route path = "/users" component = { UsersPage }/> 
                    <Route path = "/posts" component = { PostsPage }/>  
                    <Route path = "/new" component = { CreatePage }/> 
                </Switch > 
                </main> 
            </HashRouter > 
            < ToastContainer position = { toast.POSITION.BOTTOM_LEFT } /> 
        </AuthContext.Provider >
    );
};


ReactDOM.render( < App/> , document.getElementById('root'));
import React from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import logo from '../../images/logos/logo.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        image: '',
    })
    
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/admin" } };
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email, imageURL} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                image: imageURL,
            } 
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
        }).catch(function(error) {
        });
    }
    
    return (
        <div className = 'login'>                
            <Link to="/">
                <img src={logo} alt="logo" className="logo"/>    
            </Link>
            <div className="loginForm">
                <div className="loginMethod">
                    <h3>Login with</h3>
                    <Link to="/orders">
                        <button onClick={handleGoogleSignIn} className ='logInBtn'> <FontAwesomeIcon icon={['fab', 'google']} /><span>Continue with Google</span></button>
                    </Link>
                    <p className ='createAccountBtn'>Don't have an account? <Link>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
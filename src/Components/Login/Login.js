import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import googleImage from '../../images/Group 573.png'
import './Login.css'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const  { from } = location.state || { from: { pathname: "/" } };


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app(); 
     }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email}= result.user;
                const signedInUser = {name: displayName, email: email}

                console.log(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from)
            }).catch((error) => {
              
                var errorCode = error.code;
                var errorMessage = error.message;
             
                var email = error.email;
               
                var credential = error.credential;
             
            });
    }
    return (
        <div>
            <div className="google justify-content-center" onClick={handleGoogleSignIn}>
                <img src={googleImage} alt=""/>
                <h2>Sign in with Google</h2>
            </div>
        </div>
    );
};

export default Login;
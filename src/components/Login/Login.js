import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [logedInUser,setlogedInUser] = useContext(UserContext);

    const history = useHistory();
    let location = useLocation();
  
    const { from } = location.state || { from : { pathname: "/" }}

    
    const handelSignIn = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
       
        const user = result.user;
        const userName = result.user.displayName;
        setlogedInUser(user)
        history.replace(from);
        console.log(user ,userName)
     
      }).catch(function(error) {
       
      
        const errorMessage = error.message;
      
        const email = error.email;
     
        console.log(errorMessage,email)
      
      });


    }
    return (
        <div>
            <div className="logo">

                <img src={logo} alt=""/>

            </div>

            <div className="signIn-box">

            <h4>LOGIN FROM </h4>
            <p className="signIn" onClick={handelSignIn}><i class="fab fa-google"></i>continue with google</p>
            <p className="create">don't have acount? <a href="#">create an acount</a> </p>


            </div>
          
        </div>
    );
};

export default Login;
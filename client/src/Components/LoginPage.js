import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";


import axios from "axios";

import { createContext } from "react";

import { useContext } from "react";

const LoginPage = ({ location }) => {
  const cookies = new Cookies();
    let UserContext = createContext();
  var code = document.getElementById("password");

var strengthbar = document.getElementById("meter");
var display = document.getElementsByClassName("textbox")[0];




  const randString=()=>{
    const len = 8;
    let randStr = ''
    for(let i=0;i<len;i++){
      const ch = Math.floor((Math.random()*10)+1)
      randStr +=ch;
    }
    return randStr
  }



  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [confirmPassword, setConfirmPassword] = useState();
  let [username, setUsername] = useState();


  const Login = async () => {
    console.log("Login function is called")
    // let user = useContext(UserContext);
    let response = await axios.post(`http://localhost:8080/user/login`, {
      email: email,
      passwords: password,
    })
    .then(function (response) {
      console.log(response);
      cookies.set("Authorization", response.data.token, {
        path: "/",
        SameSite: "None",
      });
      cookies.set("Email", email, { path: "/", SameSite: "None" });
      alert("Login Successfully");

      setTimeout(() => {window.location.href="./"}, 3000);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      console.log(error.response.data);
      console.log(error.response);
      alert("Invalid Credentials or User not Verified");
    });

    
  };

  return (
    
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">

                        <div className="login-form-container">
                          <div className="login-register-form">
                           
                            <form>
                              <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Login</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.target.value);
                          }}
                        placeholder="Email" 
                        required/>

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                          }}
                        placeholder="Password" 
                        required/>
                    

                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            Login();
                          }}
                        class="w-full text-center py-3 rounded text-black bg-red hover:bg-green-dark focus:outline-none my-1 loginbtn"
                    style={{background: "red !important"}}>Login</button>

                    {/* <div class="text-center text-sm text-grey-dark mt-4">
                        Welcome Back */}
                        {/* <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a> */}
                    {/* </div> */}
                    
                </div>

                
            </div>
        </div>
                            </form>
                          </div>
                        </div>
                     
                     
                </div>
              </div>
            </div>
          </div>
        </div>
      
    
  );
};

LoginPage.propTypes = {
  location: PropTypes.object,
};

export default LoginPage;

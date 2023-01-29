import React, { Fragment, useState } from "react";
import Cookies from "universal-cookie";

import axios from "axios"
import LoginPage from "./LoginPage";
const RegisterPage=()=>{
  const Login=()=>{
    console.log("Login function is called")
    // let user = useContext(UserContext);
    let response =  axios.post(`http://localhost:8080/user/login`, {
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
      window.location.href="./Q1"
      // setTimeout(() => {window.location.href="./"}, 3000);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      console.log(error.response.data);
      console.log(error.response);
      alert("Invalid Credentials or User not Verified");
    });
    
  }
  const cookies = new Cookies();
    let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [confirmPassword, setConfirmPassword] = useState();
  let [username, setUsername] = useState();
  
  const Register = async () => {
    const randString=()=>{
      const len = 8;
      let randStr = ''
      for(let i=0;i<len;i++){
        const ch = Math.floor((Math.random()*10)+1)
        randStr +=ch;
      }
      return randStr
    }
    const uniqueString = randString()+"_"+email;
    const isValid=false;
    console.log(password, confirmPassword);
    if (password === confirmPassword) {
      let response = await axios.post(`http://localhost:8080/user/register`, {
        username: username,
        email: email,
        passwords: password,
        logintoken:uniqueString,
      })
      .then(function (response) {
        console.log("Regsitered successfully");
        Login()
      })
      .catch(function (error) {
        alert("Email Already Exists. Please Try again with different Email.", );
      });

     
    } else {
      alert("Password and Confirm Password do not match.");
    }
  };
    return(
        <div>
             <form>
                              <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        onChange={(e) => {
                          e.preventDefault();
                          setUsername(e.target.value);
                        }}
                        placeholder="Name"
                        required="required" />

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
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        onChange={(e) => {
                          e.preventDefault();
                          setConfirmPassword(e.target.value);
                        }}
                        placeholder="Confirm Password" 
                        required/>

                    <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          Register();
                        }}
                        class="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
                            </form>
        </div>
    )
}

export default RegisterPage
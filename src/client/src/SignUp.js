import React, { useEffect, useState } from "react";
import './cssfiles/App.css';
import 'bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
  const [user,setUser]=useState({
    username:"",email:"",password:"",confirmpass:""
  })
  let name,value;
 const navigate=useNavigate();
  const onHandleChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
    console.log(user);
  }
  const postdata=async(e)=>{
    e.preventDefault()
    const {username,email,password,confirmpass}=user
    if(username && email && (password===confirmpass)){
      axios.post("http://localhost:5000/signUp",user)
      .then(res=>{
        if(res.data.message==="already registered email"){
          alert('ALREADY REGISTERED MAIL , PLEASE TRY WITH NEW EMAIL')
        }
        else{
          alert('successfully registered')
          navigate('/Login');
        }
      })
      
    }
    else{
      alert("invlid input:",user)
      console.log(user)
    }
    
  }
        return(
  //           <div className="sign">
  //           <h3>SIGN UP </h3>
  //           <div class="mb-3">
  //   <label for="exampleInputusername" class="form-label">Username</label>
  //   <input type="text" class="form-control" id="exampleInputusername" name="username" aria-describedby="usernameHelp" placeholder="ENTER USERNAME" required onChange={onHandleChange}/>
    
  // </div>
  // <div class="mb-3">
  //   <label for="exampleInputEmail1" class="form-label">Email address</label>
  //   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="ENTER EMAIL" required onChange={onHandleChange}/>
  //   <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  // </div>
  
  // <div class="mb-3">
  //   <label for="exampleInputPassword1" class="form-label">Password</label>
  //   <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="ENTER PASSWORD" required onChange={onHandleChange}/>
  // </div>
  
  // <div class="mb-3">
  //   <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
  //   <input type="password" class="form-control" id="exampleInputPassword210" name="confirmpass" placeholder="CONFIRM PASSWORD" required onChange={onHandleChange}/>
  //   </div>
  // <button  class="btn btn-primary" onClick={postdata} >SIGNUP</button>
  //           </div>
  
    <div className="auth-form-container">
    <h2>Register</h2>
  <form className="register-form" onSubmit={postdata}>
    <label htmlFor="name">USER NAME</label>
    <input   name="username" id="username" placeholder="ENTER USERNAME" onChange={onHandleChange} />
    <label htmlFor="email">E-mail</label>
    <input onChange={onHandleChange}type="email" placeholder="ENTER EMAIL" id="email" name="email" />
    <label htmlFor="password">Password</label>
    <input  onChange={onHandleChange} type="password" placeholder="ENTER PASSWORD" id="password" name="password" />
    <label htmlFor="password">CONFIRM Password</label>
    <input  onChange={onHandleChange} type="password" placeholder="RE-ENTER PASSWORD" id="password" name="confirmpass" />
    <button type="submit">REGISTER</button>
  </form>
  <button className="link-btn" onClick={() =>{navigate('/Login')}}>Already have an account? Login here.</button>
  </div>
) 
        
        
    }
export default SignUp

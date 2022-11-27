import React,{useState} from "react";
import './cssfiles/App.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import SignUp from "./SignUp";
import 'bootstrap';
import { Validator } from "react";
const Login=({setLoginUser})=>{
    const [user,setUser]=useState({
        email:"",password:""
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
        e.preventDefault();
      
        const {email,password}=user
  
        if( email && password){
         axios.post("http://localhost:5000/login",user).then(res=>{
          alert(res.data.message) 
          if(res.data.message==="login successfull"){
            setLoginUser({email,password})
            console.log("going next")
            navigate('/')
          }
        else if(res.data.message==="NO USERS FOUND"){
          navigate('/SignUp');
        }})
         
         
      }
      else{
          alert("invlid input")
        }
      
        
      }
      
        return(
  //           <div className="login">
  //               <br></br>
  //               <h3>LOGIN</h3>
  //               <br/>
  //               <form>
  //               <div class="mb-3">
                
  //   <label for="exampleInputEmail1" class="form-label">Email address</label>
  //   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="ENTER EMAIL" required onChange={onHandleChange}/>
  // </div>
  // <div class="mb-3">
  //   <label for="exampleInputPassword1" class="form-label">Password</label>
  //   <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="ENTER PASSWORD" required onChange={onHandleChange}/>
  // </div>
  
  

  // <center><button type="submit" class="btn btn-primary" onClick={postdata} >LOGIN</button></center>
          
  //   <center><label color="red">OR</label></center>
  // <center><button type="submit" class="btn btn-primary" onClick={()=>{navigate('/SignUp')}} >REGISTER</button></center>

  // </form>
  //           </div>
  <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={postdata}>
                <label htmlFor="email">E-mail</label>
                <input onChange={onHandleChange} type="email" placeholder="ENTER EMAIL" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input onChange={onHandleChange} type="password" placeholder="ENTER PASSWORD" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => navigate('/SignUp')}>Don't have an account? Register here.</button>
        </div>
            
        )
    }
export default Login

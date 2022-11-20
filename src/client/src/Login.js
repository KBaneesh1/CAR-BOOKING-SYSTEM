import React,{useState} from "react";
import './signin.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import SignUp from "./SignUp";
const Login=(setappuser)=>{
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
        const {email,password}=user
        if( email && password){
          axios.post("http://localhost:5000/login",user)
          .then(res=>{console.log(res);
        navigate('/');
      })

        }
        else{
          alert("invlid input")
        }
      
        
      }
      const handlenav=()=>{
        navigate('/SignUp');
      }
        return(
            <div className="login">
                <br></br>
                <h3>LOGIN</h3>
                <br/>
                <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="ENTER EMAIL" required onChange={onHandleChange}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="ENTER PASSWORD" required onChange={onHandleChange}/>
  </div>
  
  

  <center><button type="submit" class="btn btn-primary" onClick={postdata} >LOGIN</button></center>
          <br/>
          
  <center><button type="submit" class="btn btn-primary" onClick={handlenav} >REGISTER</button></center>


            </div>
        )
    }
export default Login

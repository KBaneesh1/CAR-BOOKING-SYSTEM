import React from "react"; //acts like require
import './App.css';
import 'react-bootstrap';
import NavLinCom from './style';
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import { useState } from "react";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"; //browser-router is for the browsing history in the browser
import Booking from "./Booking";
function App(){
	const [user,setuser]=useState({});

	return(
		<Router>
		<div className="App">
			<NavLinCom/>
		</div>
		<Routes> 
		if(user.email && user.password){ 
          <Route exact path="/" element={<Home/>}/>
		}
		else{
				<Route path="/Login" element={<Login setuser={setuser}/>}/>
		}
				<Route path="/Booking" element={<Booking/>}/>

				<Route path="/SignUp" element={<SignUp/>}/>
				<Route path="/Login" element={<Login setuser={setuser}/>}/>
        </Routes>
		</Router>

	)
}
export default App;
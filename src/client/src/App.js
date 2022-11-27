import React from "react"; //acts like require
import './cssfiles/App.css';
import 'react-bootstrap';
import NavLinCom from './style';
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import { useState } from "react";
import Logout from "./Logout";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"; //browser-router is for the browsing history in the browser
import Booking from "./Booking";
import { SelectedCar } from "./context/select_car";
import { LoginDetails } from "./context/logincar";
function App(){
	const [user1,setLoginUser]=useState({});
	const [prescar,setpost]=useState({})
	console.log("inside app:",user1)
	console.log("selected car",prescar);
	return(
		<Router>
		<div className="App">
			<NavLinCom/>
		</div>
		<LoginDetails.Provider value={{user1,setLoginUser}}>

		<SelectedCar.Provider value={{prescar,setpost}}>
		<Routes> 
		
          <Route exact path="/" element={user1.email && user1.password ? <Home/> : <Login setLoginUser={setLoginUser}/>}/>
			<Route path="/Login" element={<Login setLoginUser={setLoginUser}/>}/>

			<Route path="/Booking" element={user1.email && user1.password  ?  prescar.car_company && prescar.car_model ?<Booking />:<Home/> : <Login setLoginUser={setLoginUser}/>}/>

			<Route path="/SignUp" element={<SignUp/>}/>
			<Route path="/logout" element={user1.email && user1.password ? <Logout setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/>
		
        </Routes>
		</SelectedCar.Provider>
		</LoginDetails.Provider>

		</Router>

	)
}
export default App;
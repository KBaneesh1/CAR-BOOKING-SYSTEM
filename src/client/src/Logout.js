
import React from "react";
import { SelectedCar } from "./context/select_car";
import { useContext } from "react";
import { LoginDetails } from "./context/logincar";
const Logout=()=>{
    const {presacar,setpost}=useContext(SelectedCar);
    const {user1,setLoginUser}=useContext(LoginDetails);
    
    setLoginUser({});
    setpost({});
    return(
    <h1>SUCCESSFULLY LOGGED OUT</h1>
    )
}
export default Logout;
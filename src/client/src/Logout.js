
import React from "react";
import { SelectedCar } from "./context/select_car";
import { useContext } from "react";
const Logout=({setLoginUser})=>{
    const {presacar,setpost}=useContext(SelectedCar);
    setLoginUser({});
    setpost({});
    return(
    <h1>SUCCESSFULLY LOGGED OUT</h1>
    )
}
export default Logout;
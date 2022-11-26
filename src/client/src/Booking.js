import React,{Component, useContext,useEffect} from "react";
import { SelectedCar } from "./context/select_car";

const Booking=()=>{
    const {prescar,setpost}=useContext(SelectedCar);
    useEffect(()=>{
    console.log("inside booking",prescar)},[]);
    return(
        <h1>THIS IS BOOKING PAGE</h1>
    )
}
export default Booking;
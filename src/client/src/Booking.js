import { SelectedCar } from "./context/select_car";
import axios from "axios";
import React, { useEffect, useState ,useContext} from 'react'
import DefaultLayout from './DefaultLayout'
import {Col,Row,Divider,DatePicker, Card} from 'antd'
import moment from 'moment';
import { LoginDetails } from "./context/logincar";
import { useNavigate } from "react-router-dom";
const {RangePicker}=DatePicker
// const {from,setFrom}=useState()
// const {to,setTo}=useState()
// const {totalHours,setTotalHours}=useState(0)
// const {totalAmount,setTotalAmount}=useState(0)



function BookCar(){
    const navigate=useNavigate();
    const {prescar,setpost}=useContext(SelectedCar);
    const {user1,setLoginUser}=useContext(LoginDetails);
    const [fromdt,setFrom]=useState();
    const [todt,setTo]=useState();
    const [totalhour,setTotalhours]=useState();
    const [totalamount,setTotalAmount]=useState();
    const [FullUserBook,setUserBook]=useState({})
//     useEffect(()=>{
//     console.log("inside booking",prescar)},[]);
    //const {cars}=useSelector(state=>state.carReducer)
    // const {loading}=useSelector(state=>state.alertReducer)
    // const dispatch=useDispatch();

    // useEffect(()=>{
    //     dispatch(getAllCars())
    // })
    useEffect(()=>
    {
        setTotalAmount(((totalhour)/24*prescar.rent))
    })
    function SelectTimeSlot(values){
        
        setFrom(moment(values[0]).format('MMM DD yyyy HH:mm'))
        setTo(moment(values[1]).format('MMM DD yyyy HH:mm'))
        setTotalhours(values[1].diff(values[0],'hours'))
        console.log(fromdt,todt,totalamount,totalhour)

    }
    var email=user1.email;
    var password=user1.password;
    var currcar=prescar.car_company;
    var currmodel=prescar.car_model;
    const handlesubmit=(e)=>{
        e.preventDefault();
        setUserBook({email,password,currcar,currmodel,fromdt,todt,totalamount});
        console.log(FullUserBook);
        axios.post('http://localhost:5000/FullUser',FullUserBook)
        .then(res=>{alert(res.data.message);
        navigate('/SignUp');})
        
    }
    return(
        <DefaultLayout>
            <h1 className='dfp'>Book a Ride</h1>
            <Row justify='center' classname='d-flex align-item-center' style={{minHeight:'90vh'}}>
                <Col lg={10} sm={24} xs={24}>
                    <img src={prescar.image} className='carimg2 bs1'/>
                </Col>
                <Col lg={10} sm={24} xs={24} className='text-right'>
                    <Divider type='horizontal' dashed>Car Info</Divider>
                    <div style={{textAlign:'right'}}>
                        <p>CAR: {prescar.car_company} {prescar.car_model }</p>
                        <p>RENT-PER-DAY: {prescar.rent}</p>
                        <p>RATING: {prescar.rating}</p>
                        <p># AVAILABLE: {prescar.available}</p>
                    </div>
                </Col>
                <form>
                <Divider type='horizontal' dashed>Select Time Slot</Divider>
                <RangePicker showTime={{format:'HH:mm'}} format='MMM DD YYYY HH:mm' onChange={SelectTimeSlot}></RangePicker>
                <div>
                  <p>TOTAL TIME:{totalhour}</p>
                  <p>Rent-Per-Day: <b>{ prescar.rent }</b></p>
                  <h3>TOTAL AMOUNT: {totalamount}</h3> 
                  <button type="submit" className='btn1' onClick={handlesubmit}>Book Now</button> 
                </div>
                </form>
            </Row>
           

        </DefaultLayout>
    
    )
}

export default BookCar
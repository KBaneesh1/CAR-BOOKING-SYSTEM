import React, { useContext } from "react";
import 'bootstrap';
// import axios from "axios";
import DefaultLayout from './DefaultLayout';
import {Row,Col} from 'antd';
// import { getAllCars } from './redux/actions/carsActions';
import { useNavigate } from "react-router-dom";
import { SelectedCar } from "./context/select_car";
const Home = () => {
 
    const navigate=useNavigate();
    // useEffect(()=>{
    //     axios.get("").then(res=>{setpost(res)})
    
    // },[])
    const {prescar,setpost}=useContext(SelectedCar);
    console.log(typeof(setpost))
    var cars=[{"car_company":"NISSAN","car_model":"TERRANO","rent":3000,"rating":"4.7","available":6,"image":"./images/navara_nissan.png"},
    {"car_company":"NISSAN","car_model":"ALMERA","rent":2000,"rating":"4.3","available":6,"image":"./images/almera_nissan.jpg"},
    {"car_company":"HONDA","car_model":"CITY","rent":2000,"rating":"4.9","available":6,"image":"./images/city_honda.png"},
    {"car_company":"HONDA","car_model":"CIVIC","rent":2000,"rating":"4.8","available":6,"image":"./images/civic_honda.jpg"},
    {"car_company":"TOYOTA","car_model":"VELLFIRE","rent":5000,"rating":"4.2","available":6,"image":"./images/vellfire_toyota.jpeg"},
    {"car_company":"TOYOTA","car_model":"COROLLA","rent":3000,"rating":"4.4","available":6,"image":"./images/altis_toyota.png"},
    {"car_company":"VOLKSWAGEN","car_model":"BEETLE","rent":5000,"rating":"4.7","available":6,"image":"./images/beetle_volkswagen.jpg"},
    {"car_company":"TOYOTA","car_model":"INNOVA","rent":5000,"rating":"4.9","available":6,"image":"./images/innova_toyota.webp"},
    {"car_company":"MERCEDES","car_model":"C320","rent":10000,"rating":"5.0","available":6,"image":"./images/c_mercedes.jpeg"}];
    
    return(
        <DefaultLayout>
            <Row justify="center" gutter={16}>
                    {
                        cars.map(car=>{
                            return <Col lg={5} sm={24} xs={24}>
                               <div className='car p-2 bs1 mt' >
                                    <img src={car.image} className='carimg'/>
                                    <div className='car-content d-flex'>
                                        <div>
                                            <p>{car.car_company}</p>
                                            <p>{car.rent} Rent-Per-Day</p>
                                        </div>
                                        <div>
                                            <button onClick={()=>{setpost(car);
                                            navigate('/Booking')}}>Book Now</button>
                                        </div>

                                    </div>
                                    <h3>{car.car_company}</h3>
                                </div>
                            </Col>
                        })
                    }
            </Row>
        </DefaultLayout>
    )
}

    // const [post,setpost]=useState([]);
    // // useEffect(()=>{
    // //     axios.get('/cardet')
    // //     .then((res)=>setpost(res.data))
    // //     .catch((console.error('error occured')))
    // // },[])
    
    // return (
    //     <div backgroundColor="blue">
    //     <section id="member" class="mt-5">    
    //         <div>
    //         <div class="container m-10">
    //             <h1 class="text-center test" id="title_page" style={{color:"rgb(255, 255, 255)"}}>Select a car you'd like to rent</h1>
    //             <br />
    //             <div class="row justify-content-between">
                
    //                 <div class="ml-3">
    //                     <button type="button" class="btn btn-outline-secondary" id="box_page">All</button>
    //                     <button type="button" class="btn btn-outline-secondary" id="box_page">Nissan</button>
    //                     <button type="button" class="btn btn-outline-secondary" id="box_page">Honda</button>
    //                     <button type="button" class="btn btn-outline-secondary" id="box_page">Toyota</button>
    //                     <button type="button" class="btn btn-outline-secondary" id="box_page">Others</button>
    //                 </div>
    //                 <div class="justify-content-lg-end">
    //                     <input class="form-control" type="text" placeholder="Search" id="searchBox" style={{backgroundColor:" bisque"}} />
    //                 </div>
    //             </div>

    //             <div class="row">
    //                 <div class="col-md-6 col-lg-4 my-2 item nissan">
    //                     <div class="card h-100">
    //                         <img class="card-img-top" src={require("./images/navara_nissan.png")} alt="target_blank" />
    //                         <div class="card-body" id="card_page">
    //                             <p class="card-text">Terrano, Nissan</p>
    //                             <div class="d-flex justify-content-between">
    //                                 <div class="column">
    //                                     <h5 class="card-title">For rent: Rs.3000/day</h5>
    //                                     <h5 class="card-title">Rating: 4.7</h5>
    //                                     <button class=" w-50 car_item-btn rounded">
    //                                         <h5>Rent</h5>
    //                                     </button>
    //                                 </div>
    //                                 <p class="rentNissan"></p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div class="col-md-6 col-lg-4 my-2 item nissan">
    //                     <div class="card h-100">
    //                         <img class="card-img-top" src={require("./images/almera_nissan.jpg")}  alt="target_blank"/>
    //                         <div class="card-body" id="card_page">
    //                             <p class="card-text">Almera, Nissan</p>
    //                             <div class="d-flex justify-content-between">
    //                                 <div class="column">
    //                                     <h5 class="card-title">For rent: Rs.2000/day</h5>
    //                                     <h5 class="card-title">Rating: 4.3</h5>
    //                                     <button class=" w-50 car_item-btn rounded" >
    //                                         <h5>Rent</h5>
    //                                     </button>
    //                                 </div>
    //                                 <br />

    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6 col-lg-4 my-2 item honda">
    //                     <div class="card h-100">
    //                         <img class="card-img-top" src={require("./images/city_honda.png")}  alt="target_blank"/>
    //                         <div class="card-body" id="card_page">
    //                             <p class="card-text">City, Honda</p>
    //                             <div class="d-flex justify-content-between">
    //                                 <div class="column">
    //                                     <h5 class="card-title">For rent: Rs.2000/day</h5>
    //                                     <h5 class="card-title">Rating: 4.9</h5>
    //                                     <button class=" w-50 car_item-btn rounded">
    //                                         <h5>Rent</h5>
    //                                     </button>
    //                                 </div>
    //                                 <br />
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6 col-lg-4 my-2 item honda">
    //                     <div class="card h-100">
    //                         <img class="card-img-top" src={require("./images/civic_honda.jpg")}  alt="target_blank"/>
    //                         <div class="card-body" id="card_page">
    //                             <p class="card-text">Civic, Honda</p>
    //                             <div class="d-flex justify-content-between">
    //                                 <div class="column">
    //                                     <h5 class="card-title">For rent: Rs.2000/day!</h5>
    //                                     <h5 class="card-title">Rating: 4.8</h5>
    //                                     <button class=" w-50 car_item-btn rounded">
    //                                         <h5>Rent</h5>
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6 col-lg-4 my-2 item toyota">
    //                     <div class="card h-100">
    //                         <img class="card-img-top" src={require("./images/vellfire_toyota.jpeg")} alt="target_blank" />
    //                         <div class="card-body" id="card_page">
    //                             <p class="card-text">Vellfire, Toyota</p>
    //                             <div class="d-flex justify-content-between">
    //                                 <div class="column">
    //                                     <h5 class="card-title">For rent: Rs.5000/day</h5>
    //                                     <h5 class="card-title">Rating: 4.2</h5>
    //                                     <button class=" w-50 car_item-btn rounded">
    //                                         <h5>Rent</h5>
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6 col-lg-4 my-2 item toyota">
    //                     <div class="card h-100">
    //                         <img class="card-img-top" src={require("./images/altis_toyota.png")} alt="target_blank"/>
    //                         <div class="card-body" id="card_page">
    //                             <p class="card-text">Corolla, Toyota</p>
    //                             <div class="d-flex justify-content-between">
    //                                 <div class="column">
    //                                     <h5 class="card-title">For rent: Rs.3000/day</h5>
    //                                     <h5 class="card-title">Rating: 4.4</h5>
    //                                     <button class=" w-50 car_item-btn rounded">
    //                                         <h5>Rent</h5>
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6 col-lg-4 my-2 item others">
    //                     <div class="card h-100">
    //                         <img class="card-img-top" src={require("./images/beetle_volkswagen.jpg")} alt="target_blank"/>
    //                         <div class="card-body" id="card_page">
    //                             <p class="card-text">Beetle, Volkswagen</p>
    //                             <div class="d-flex justify-content-between">
    //                                 <div class="column">
    //                                     <h5 class="card-title">For rent: Rs.5000/day</h5>
    //                                     <h5 class="card-title">Rating: 4.7</h5>
    //                                     <button class=" w-50 car_item-btn rounded">
    //                                         <h5>Rent</h5>
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6 col-lg-4 my-2 item toyota">
    //                     <div class="card h-100">
    //                         <img class="card-img-top" src={require("./images/innova_toyota.webp")} alt="target_blank" />
    //                         <div class="card-body" id="card_notavailable">
    //                             <p class="card-text">Innova, Toyota</p>
    //                             <div class="d-flex justify-content-between">
    //                                 <div class="column">
    //                                     <h5 class="card-title">For rent: Rs.5000/day</h5>
    //                                     <h5 class="card-title">Rating: 4.9</h5>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6 col-lg-4 my-2 item others">
    //                     <div class="card h-100">
    //                         <img class="card-img-top" src={require("./images/c_mercedes.jpeg")} alt="" />
    //                         <div class="card-body" id="card_notavailable">
    //                             <p class="card-text">C320, Mercedes</p>
    //                             <div class="d-flex justify-content-between">
    //                                 <div class="column">
    //                                     <h5 class="card-title">For rent: Rs.10000/day</h5>
    //                                     <h5 class="card-title">Rating: 5.0</h5>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         </div>
    //     </section>
    //  <div class="column" id="subtitle_points">

    //  </div>
    // <div class="d-flex flex-column h-100">
    //     <section class="hero text-white py-5 flex-grow-1" style={{backgroundColor:"#383d48"}}>
    //         <div class="container py-4">
    //             <div class="row">
    //                 <div class="col-lg-6">
    //                     <h1 class="display-4">Cars by Bin-Laden</h1>
    //                     <p class="fst-italic text-muted">Get the highest quality, safest and insured cars for the cheapest price!
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>



    //     <footer class="w-100 py-4 flex-shrink-0" style={{backgroundColor:" #383d48"}}>
    //         <div class="container py-4">
    //             <div class="row gy-4 gx-5">
    //                 <div class="col-lg-4 col-md-6">
    //                     <h5 class="h1 text-white">CBL </h5>
    //                     <p class="small text-muted">Since 2003</p>
    //                     <p class="small text-muted mb-0">Copyrights. All rights reserved.</p>
    //                 </div>
                    

    //                  <div class="col-lg-4 col-md-6">
    //                     <h5 class="text-white mb-3">Newsletter</h5>
    //                     <p class="small text-muted">If you're interested in subscribing to the newsletter, feel free to enter your
    //                         email-id below!</p>
    //                     <form action="#">
    //                         <div class="input-group mb-3">
    //                             <input class="form-control" type="text" placeholder="Recipient's username"
    //                                 aria-label="Recipient's username" aria-describedby="button-addon2" />
    //                             <button class="btn btn-primary" id="button-addon2" type="button"><i
    //                                 class="fas fa-paper-plane"></i></button>
    //                         </div>
    //                     </form>
    //                 </div> 
    //             </div>
    //         </div>
    //     </footer>
    // </div>
    // </div>

  
    // )

export default Home;
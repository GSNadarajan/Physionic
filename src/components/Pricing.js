import React from "react";
import Pricecard from "../components/Pricecard";
import '../css/Card.css';


const Pricing = () =>{
    return(
       <div className="cardDiv md:mt-20 center mb-5">
            <div>
               <h1 className="text-3xl text-center font-semibold mb-3 mt-7">Pricing</h1>
               <p className="text-center">Problems trying to resolve the conflict between</p>
               <p className="text-center">the major of realme classic physics newtonion mechanics</p>
            </div>
          <div className="container items-center mx-auto grid md:grid-cols-3 gap-5 mt-9 md:mt-20">
             <Pricecard />
             <Pricecard />
             <Pricecard />  
          </div>
       </div>
          
       
    )
}

export default Pricing;
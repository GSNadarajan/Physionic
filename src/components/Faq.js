import React from "react";
import Reviewcard from "../components/Faqcard";
import '../css/Faq.css';


const Faq = () =>{
    return(
       <div className="faqDiv md:mt-20 center">
            <div>
               <h1 className="text-3xl text-center font-semibold mb-3 mt-7">FAQ</h1>
               <p className="text-center">Problems trying to resolve the conflict between</p>
               <p className="text-center">the major of realme classic physics newtonion mechanics</p>
            </div>
          <div className="container items-center mx-auto grid md:grid-cols-3 gap-5 mt-9 md:mt-20">
             <Reviewcard />
             <Reviewcard />
             <Reviewcard />
             <Reviewcard />
             <Reviewcard />
             <Reviewcard />
             <Reviewcard />
             <Reviewcard />
             <Reviewcard />
          </div>
       </div>
          
       
    )
}

export default Faq ;
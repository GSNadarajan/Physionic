import React from "react";
import Navbar from "./components/Navbar";
import Slides from "./components/Slides";
import Review from "./components/Review";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";


function App() {
  return (

  <div className="bg-[#fafafa]">
    <Navbar />
    <Slides />
    <Review />
    <Faq />
    <Pricing price1='0' price2='9.99' price3='19.99'/>
  </div>
 
  );
}

export default App;

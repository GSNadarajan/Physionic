import React from "react";
import Navbar from "./components/Navbar";
import Slides from "./components/Slides";
import Review from "./components/Review";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Getintouch from "./components/Getintouch";


function App() {
  return (

  <div className="bg-[#fafafa]">
    <Navbar />
    <Slides />
    <Review />
    <Faq />
    <Pricing />
    <Getintouch />
  </div>
 
  );
}

export default App;

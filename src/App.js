import React from "react";
import Navbar from "./components/Navbar";
import Slides from "./components/Slides";
import Review from "./components/Review";
import Faq from "./components/Faq";


function App() {
  return (

  <div className="bg-[#fafafa]">
    <Navbar />
    <Slides />
    <Review />
    <Faq />
  </div>
 
  );
}

export default App;

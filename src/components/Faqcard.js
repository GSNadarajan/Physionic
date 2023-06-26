import React from "react";

const Faqcard = () => {
    return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <div className="w-full  p-8 text-center">
           <div className="flex ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-blue-500 font-extrabold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>

              <h1 className="text-1xl text-left ml-2 mt-1 font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, facere </h1>  
           </div>
        </div>

        <div class="px-10 py-0 ml-6">
          <p class="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
    </div>
    )
}

export default Faqcard;
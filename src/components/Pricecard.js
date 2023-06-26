import React from "react";

const Pricecard = () => {
    return(
        <div class="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
        <div className="w-full p-8 text-center">
           <div className=" ">
              <h1 className="text-center mt-1 text-2xl ">STANDARD</h1>  
              <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, explicabo fugiat?</p>
              <h1 className="text-center mt-3 p-5 text-blue-400 text-4xl font-extrabold">9.99$ <span className="mt-1  text-blue-400 text-2xl">per month</span></h1>  
           </div>
        </div>

        <div class="px-6 py-4">
            <p class="text-gray-700 text-base grid"></p>
            <span className="flex ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-white fill-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="ml-2">Design with real data</p> 
           </span>
           <span className="flex  mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-white fill-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="ml-2">Lightning fast prototyping</p> 
           </span>
           <span className="flex mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-white fill-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="ml-2"> Fastest way to organize</p> 
           </span>
           <span className="flex mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-white fill-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="ml-2">Work at the speed of thought</p> 
           </span>
           <span className="flex  mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-white fill-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="ml-2">Work at the speed of thought</p> 
           </span>
            <span className="flex  mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-white fill-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="ml-2">Work at the speed of thought</p> 
           </span>

           

    
        </div>
        <button className="w-full bg-blue-400 text-white text-center font-bold  mx-auto p-2">Try for free</button>
    </div>
    )
}

export default Pricecard;
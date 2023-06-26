import React from "react";


const Reviewcard = () =>{
    return(
    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <div className="w-full p-8 text-center">
           <div className="flex ">
              <span className="bg-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              </span>
              <h1 className="text-center mt-1 text-2xl ml-2"> Emergency case</h1>  
           </div>
        </div>

        <div class="px-6 py-4">
    
          <p class="text-gray-700 text-base grid">
            <span className="mt-1" > - The best products start with figma</span>
            <span className="mt-1" > - Design with real data</span>
            <span className="mt-1" > - Lightning fast prototyping</span>
            <span className="mt-1" > - Fastest way to organize</span>
            <span className="mt-1" > - Work at the speed of thought</span>

          </p>
        </div>
        <div class="px-6 pb-2">
          <span class="px-3 py-1 text-sm font-semibold text-blue-400 mr-2 mb-2">Learn more</span>
        </div>
    </div>
    )
}

export default Reviewcard;

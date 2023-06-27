import React from "react";

const Getintouch = () =>{
    return(
    <div className=" bg-[#272742] mx-auto mt-5">
        <div className="container mt-4 md:mt-11 mb-11 md:flex p-8 mx-auto ">
            
            <div  className="w-full md:w-1/2 md:float-left md:right-100 mx-auto">
                <h1 className="text-white text-3xl font-bold ">Get In Touch</h1>
                <p className="text-white mt-2">Eos rem ducimus magni natus  repellat place</p>
                <p className="text-white">Eos rem ducimus magninm</p>
            </div>

            <div className="className w-full md:w-1/2 mx-auto mt-3 md:mt-0">  
                    <div class="flex end-3 mt-7 md:float-right">
                        <input type="search" id="default-search" class=" p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-l bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " placeholder="Your Email" required/>
                        <button type="submit" class="p-4 text-white  bg-blue-700 hover:bg-blue-800 rounded-r focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
            </div>
          
        </div>
    </div>
    
        
    )
}

export default Getintouch;
import React from "react";

const Main = () => {
    return(
        <div className="div flex mt-28 md:mt-32 flex-wrap">
            <div className="w-full md:w-1/2  md:mt-32  text-center">
                <h1 className="text-2xl md:text-5xl font-bold sm:mr-10 ">Meet the best</h1>
                <h1 className="mt-1 sm:mt-3 text-2xl md:text-5xl font-bold sm:mr-44 ">Hospital</h1>
                <p className="sm:mr-28 mt-4 md:mt-9">We know how large objects will act,</p>
                <p className="sm:mr-44 mt-1">but things on a small scale.</p>

                <button className="bg-blue-400 p-2 text-white rounded-full center text-center mt-3 sm:mr-64 ">Get quote
                    now</button>

            </div> 

            <div className="mx-auto w-full md:w-1/4 mt-5">
                <form class="bg-white shadow-md rounded-s-md px-8 pt-6 pb-8 mb-4 mx-5">
                    <div class="mb-4">
                        <h1 className="text-1xl font-bold text-center"> Book Appointments</h1>
                        <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="username">
                            Name*
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Fullname" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="Emailaddress">
                            Emailaddress*
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="example@gmail.com" />
                    </div>

                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="Departments">
                            Departments*
                        </label>
                         
                        <select id="countries"
                        class="shadow appearance-none bg-white border text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Please select</option>
                        <option value="U">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                       
                   </div>
                   
                   <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="Departments">
                            Time*
                        </label>
                         
                        <select id="countries"
                        class="shadow appearance-none bg-white border text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Please select</option>
                        <option value="U">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                       
                   </div>

                    
                    
                    <div class="flex items-center ">
                        <button
                            class="w-full bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-3"
                            type="button">
                            Book Appointment
                        </button>

                    </div>
                </form>
            </div>

        </div>
    )
}
export default  Main;
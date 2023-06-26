import React from "react";
import Main from "./Main";
import './Navbar.css';

const Navbar= () => {

    const navLinks = document.querySelector('.nav-links')
    const onToggleMenu = (e) =>{
        console.log("hello man")
        e.name = e.name === 'menu' ? 'close' : 'menu'
        navLinks.classNameList.toggle('top-[9%]')
    }
    return(
        <div className="navDiv bg-red-200">
            <header className="">
                    <nav className="flex justify-between items-center w-[92%]  mx-auto ">
                        <div>
                            <h3 className="w-16 cursor-pointer font-bold text-3xl mt-3" >Physionic</h3> 
                        </div>
                        <div
                            className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mt-3">
                                <li>
                                    <a className="hover:text-gray-500" href="#">Products</a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-500" href="#">Solution</a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-500" href="#">Resource</a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-500" href="#">Developers</a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-500" href="#">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-6 ">
                            <div className="">
                            <button className="flex bg-blue-400 text-white px-5 py-3  p-3 rounded-sm hover:bg-[#87acec] mt-3 ">Get Quote Now
                            <span className="ml-3">
                                <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </span>
                               
                            </button>
                                
                            </div>
                            
                            <p onclick="onToggleMenu(this)" name="menu" className="text-3xl cursor-pointer  text-black hidden md:block"></p>
                        </div>
                        </nav>
             </header> 
             <Main />
        </div>
    
        
    )
}

export default Navbar;

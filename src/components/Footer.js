import React from "react";
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';



const Footer= () => {
    return(
        <div className="container mx-auto mt-12 mb-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto">
                    <div className="mx-auto">
                        <h1 className="text-3xl font-bold mt-3">Get in touch</h1>
                        <p className="mt-4 mx-auto">Lorem ipsum dolor sit amet consectetur rem.</p>
                        <span className="flex p-3 text-2xl text-blue-400">
                            <span className="">
                               <BsFacebook  />
                            </span>
                            <span className="ml-3">
                               <BsInstagram />
                            </span>
                            <span className="ml-3">
                               <BsTwitter />
                            </span>        
                        </span>
                    </div>

                    <div className="mx-auto">
                        <h1 className="text-3xl font-bold mt-3">Company info</h1>
                        <p className="mt-4 mx-auto">Lorem ipsum dolor sit amet consectetur rem.</p>
                        <span className=" text-1xl">
                           <p className="mt-3">About us</p>
                           <p className="mt-3">Career</p>
                           <p className="mt-3">We are hiring</p>
                           <p className="mt-3">Blog</p>
       
                        </span>
                    </div>

                    <div className="mx-auto mt-6 md:mt-0">
                        <h1 className="text-3xl font-bold mt-3">Feautures</h1>
                        <p className="mt-4 mx-auto">Lorem ipsum dolor sit amet consectetur rem.</p>
                        <span className=" text-1xl">
                           <p className="mt-3">Business marketing</p>
                           <p className="mt-3">User Analytic</p>
                           <p className="mt-3">Live chat</p>
                           <p className="mt-3">Unlimited chat</p>
       
                        </span>
                    </div>

                    <div className="mx-auto mt-6 md:mt-0">
                        <h1 className="text-3xl font-bold mt-3">Resources</h1>
                        <p className="mt-4 mx-auto">Lorem ipsum dolor sit amet consectetur rem.</p>
                        <span className=" text-1xl">
                           <p className="mt-3">IOS and android</p>
                           <p className="mt-3">Watch a demo</p>
                           <p className="mt-3">Customers</p>
                        </span>
                    </div>                                                              
                </div>

                <div class=" text-center mt-7">
                  <h1 className="text-1xl">Made with love by Nadarajan G S</h1>
                </div>
        </div>
    )
}

export default Footer;
import React from "react";
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


const Footer= () => {
    return(
        <div className="container mx-auto">
            <Footer>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
                    <div className="">
                        <h1 className="text-4xl">Get in touch</h1>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, rem.</p>
                        <span className="flex">
                           <BsFacebook />
                           <BsInstagram />
                           <BsTwitter />
                        </span>


                    </div>

                </div>
                
            </Footer>
        </div>
    )
}

export default Footer;
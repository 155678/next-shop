import Link from 'next/link';
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { SiGooglemaps } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";


export default function Header() {
  return (
    <div className=" bg-pink-200 border-y-4  text-black border-pink-300 hidden sm:block">
      <div className="py-2"> 
        <div className="flex justify-between item-center">
          <div className=" p-1.5 m-1 hidden lg:flex gap-1">
             <Link href="/cart" className="bg-pink-100 rounded-md p-1  cursor-pointer  hover:text-red-300 text-center text-lg" >
                <FaCartArrowDown />
            </Link>
            <Link href="/about" className=" bg-pink-100 rounded-md p-1  cursor-pointer  hover:text-red-300 text-center text-lg" >
               <FcAbout />
            </Link>
            <Link href="https://www.google.com/maps" className="bg-pink-100 rounded-md p-1 cursor-pointer  hover:text-red-300 text-center text-lg" >        
               <SiGooglemaps />
            </Link>
            <Link href="https://www.instagram.com" className="bg-pink-100 rounded-md p-1 cursor-pointer  hover:text-red-300 text-center text-lg" >          
              <FaInstagram />
            </Link>
           </div>


       <div className="text-gray-500 ms-4 p-2 text-lg">
          <b >Online Shoping</b>-The Shop for you-Price Perfect
       </div>
        </div>
      </div>
    </div>
  )
}

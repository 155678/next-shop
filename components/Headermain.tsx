import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function Headermain() {
  return ( <div className="border-b border-pink-200 py-6">
      <div className="sm:flex justify-between items-center">
        <div className="font-bold text-3xl  text-center pb-4 sm:pb-0 text-pink-300">Shop</div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input className="border-pink-200 border-2 p-2 px-4 rounded-lg  w-full" type="text" placeholder="Enter any product name..." />
          <CiSearch className="absolute right-0 top-0 mr-3 mt-3 text-pink-400" size={20} />
        </div>
      </div>
    </div>
  )
}

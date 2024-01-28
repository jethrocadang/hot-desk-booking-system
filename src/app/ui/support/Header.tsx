
"use client";


import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image'
import dynamic from 'next/dynamic';




export default function Header() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    console.log(`Searching for ${searchTerm}`);
  };
  
  return (
    
    <div className=' pt-10 mx-14'>
      <div className='flex w-full  justify-between	'>
        <h1 className='text-blue-900 text-3xl	font-semibold'>User Guides</h1>
        <div className="">
          <div className="flex flex-col items-start justify-satrt ">
            <div className=" relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full h-10 px-4 pr-10 text-sm bg-white border-2 border-gray-500 rounded-lg lg:w-80 focus:outline-none text-black "
                placeholder="Search term..."
              />
              <CiSearch className="text-blue-900 text-2xl cursor-pointer absolute right-2.5 top-2"/>
            </div>
            {searchTerm && (
              <div className="mt-10 text-2xl">Search term: {searchTerm}</div>
            )}
         </div>
        </div>
      </div>
    </div>
  )
}

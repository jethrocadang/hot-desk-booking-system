"use client";
import Image from 'next/image'
import Link from 'next/link';





export default function NavBar (){
  

  return(
    <header className="absolute inset-x-0 top-0 z-50">
        
        <nav className="flex items-center justify-between border-b-2 border-blue-900 lg:px-8 drop-shadow-md h-20" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex" >
              <Image
                className="h-10 w-auto justify-center align-middle"
                src={'/LOGO.png'}
                width={50}
                height={50}
                alt=""
              />
              <span className="not-sr-only text-blue-800 ml-2 mt-1 font-bold text-xl">Desk<span className="text-blue-600	">Flow</span></span>
            </a>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <div className="flex gap-4">
              <div>
                <Link href={'/login'} className=" px-10 py-3 text-sm bg-blue-900 text-slate-200 rounded-xl hover:bg-white hover:text-black hover:drop-shadow-lg">Login</Link>
              </div>
              <div >
              <Link href={'/register'} className="px-10 py-3 text-sm  border	border-blue-900 text-black rounded-xl hover:bg-blue-900 hover:drop-shadow-lg hover:text-white">Register</Link>

              </div>
            </div>
          </div>
        </nav>
      </header>

  )

}
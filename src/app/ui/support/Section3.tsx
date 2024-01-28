
"use client";



import Image from 'next/image'
import Calendar from '../../../../../public/img/Section3/Calendar.png'




export default function Section3() {

  
  
  return (
    
    <div className=' pt-10 mx-14 scroll-smooth' id='section3'>
      <div className=' mx-14' >
        <div>
         <h1 className=" text-black text-xl font-medium	">Section 3. Calendar</h1>
        </div>
        <div className='flex flex-row mt-8'>
         <div className='flex flex-col basis-1/2 gap-8 mt-10'>
          <h3 className=" text-blue-900 text-base ml-20 font-medium">A. Users Booked Schedules</h3>
          <p className=" text-slate-700 text-sm ml-28 flex  justify-start items-center">
          You can also look into a user's schedule based on when they booked a desk. For example in the photo, a user has reserved a desk from 8:30 a.m. to 9:00 a.m. 
          <br />
          <br />
          <br />
          You may also see the calendar by Day, Month, or Year by clicking the button in the center.
          </p>
         </div>
         <div className="flex basis-1/2 justify-center items-center">
          <Image
              className=""
              src={Calendar}
              alt=""
              width={450}
              height={550}
            />
        </div>
        </div>
      </div>
      
      
    </div>
  )
}

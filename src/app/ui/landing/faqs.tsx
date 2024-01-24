"use client";
import { BsChevronRight  } from "react-icons/bs";
import { useState } from 'react';






export default function Forfaqs (){
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  // forbookingfaqs
  const [open3, setOpen3] = useState(false);
  // forAt Workspace FAQs
  const [open4, setOpen4] = useState(false);

  return(
    <div className='bg-gradient-to-t from-blue-200 via-blue-100 to-white'>
      <div className='flex flex-col gap-8 justify-center items-center pt-9'>
      <h1 className="text-5xl	font-semibold	text-blue-600 text-center mb-8"><span className="text-blue-900 ">Frequently Ask</span> Questions</h1>
        <div className={`bg-white flex items-start shadow-md w-4/6 ${open ? " h-72": "h-24"} duration-200 rounded-2xl relative`}>
          <div className=' pt-8'>
            <h1 className='text-slate-800	 text-xl pl-4'>What is Hotdesking all about?</h1>
            <div className='bg-blue-900	 p-3 absolute right-11 top-7 rounded-full cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-lg' onClick={()=> setOpen(!open)}>
              <BsChevronRight className={`text-white hover:text-black 	text-xl ${!open ?" " : "rotate-90"} duration-300 `}/>
            </div>
              <div className={` mx-5 pt-8 ${!open ?"hidden": "block"} duration-500`}>
                 <p className='text-slate-800 text-sm'>A tool or piece of software used to schedule and manage flexible workspace in an office setting is called a hot desk booking system. With hot desking, employees can use any desk or workspace that becomes available to them as needed, as opposed to having designated desks. To guarantee they have a place to work in a shared office environment, the booking system enables individuals or groups to reserve desks or work areas for a predetermined amount of time. Usually, these systems have the following features:  Desk Reservation, Checking Availability, User Profiles and Integration. 
                  <br />
                  <br />
                 These systems encourage adaptability, productivity, and teamwork in the workplace by letting workers select their workspace according to their preferences or tasks and making the best use of the office space that is available.</p>
              </div>
          </div>
        </div>
        
        {/*For General faqs*/}
        <div className={`bg-white flex items-start shadow-md w-4/6 ${open2 ? " h-96": "h-24"} duration-200 rounded-2xl relative`}>
          <div className=' pt-8'>
            <h1 className='text-slate-800	 text-xl pl-4'>General FAQs....</h1>
            <div className='bg-blue-900	 p-3 absolute right-11 top-7 rounded-full cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-lg' onClick={()=> setOpen2(!open2)}>
              <BsChevronRight className={`text-white hover:text-black	text-xl ${!open2 ?" " : "rotate-90"} duration-300 `}/>
            </div>
              <div className={` mx-5 pt-8 ${!open2 ?"hidden": "block"} duration-500 flex flex-col gap-4`}>
                 <p className='text-slate-800 text-base font-medium'>Q: How do I book a co-working space at Hotdesk?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>: You can book a co-working space at Hotdesk by using the Hotdesk app. Simply select the location, date, and time that you want to book, and choose from the available co-working spaces.</p>

                 <p className='text-slate-800 text-base font-medium'>Q: What type of co-working spaces are available at Hotdesk?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>: Hotdesk offers a variety of co-working spaces, including dedicated desks, and flexible hot desks. You can choose the type of co-working space that best fits your needs and budget.</p>

                 <p className='text-slate-800 text-base font-medium'>Q: Can I book a co-working space for a specific date and time?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>: Yes, you can book a co-working space for a specific date and time. Simply select the date and time you want to book, and choose from the available co-working spaces.</p>
              </div>
          </div>
        </div>

        {/* ForBooking FAQS */}

        <div className={`bg-white flex items-start shadow-md w-4/6 ${open3 ? " h-96": "h-24"} duration-200 rounded-2xl relative`}>
          <div className=' pt-8'>
            <h1 className='text-slate-800	 text-xl pl-4'>Booking FAQs</h1>
            <div className='bg-blue-900	 p-3 absolute right-11 top-7 rounded-full cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-lg' onClick={()=> setOpen3(!open3)}>
              <BsChevronRight className={`text-white hover:text-black text-xl ${!open3 ?" " : "rotate-90"} duration-300 `}/>
            </div>
              <div className={` mx-5 pt-8 ${!open3 ?"hidden": "block"} duration-500 flex flex-col gap-3`}>
                <p className='text-slate-800 text-sm font-medium'>Q: How do I book a space?</p>
                 <p className='text-slate-800 text-xs font-medium'><span className=' font-medium'>A</span>: Bookings can be made either by sending a request to book the space by booking instantly look for workspaces with the Booking icon. A user can book a space either by searching and filtering, or by exploring nearby.</p>

                 <p className='text-slate-800 text-sm font-medium'>Q: What happens once a booking is requested?</p>
                 <p className='text-slate-800 text-xs font-medium'><span className=' font-medium'>A</span>: The request is sent to the workspace’s admins to check the availability of the space and confirm the request. Hotdesk’s team ensures that the hosts confirm the requests as soon as they receive them.</p>

                 <p className='text-slate-800 text-sm font-medium'>Q:  I Forgot my username and/or password,what do i do?</p>
                 <p className='text-slate-800 text-xs font-medium'><span className=' font-medium'>A</span>: You can reset your password by visiting the home page —&gt; Profile —&gt; Login —&gt; Forgot password.</p>

                 <p className='text-slate-800 text-sm font-medium'>Q: Where can i find my Bookings?</p>
                 <p className='text-slate-800 text-xs font-medium'><span className=' font-medium'>A</span>: The bookings can be accessed from the Dashboard.</p>
              </div>
          </div>
        </div>

         {/* forAt Workspace FAQs */}

        <div className={`bg-white flex items-start shadow-md w-4/6 ${open4 ? " h-72": "h-24"} duration-200 rounded-2xl relative`}>
          <div className=' pt-8'>
            <h1 className='text-slate-800	 text-xl pl-4'>At Workspace FAQs</h1>
            <div className='bg-blue-900	 p-3 absolute right-11 top-7 rounded-full cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-lg' onClick={()=> setOpen4(!open4)}>
              <BsChevronRight className={`text-white hover:text-black	text-xl ${!open4 ?" " : "rotate-90"} duration-300`}/>
            </div>
              <div className={` mx-5 pt-8 ${!open4 ?"hidden": "block"} duration-500 flex flex-col gap-4` }>
                 <p className='text-slate-800 text-base font-medium'>Q: Is there Wi-Fi and printing available at the co-working space?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>: Yes, Wi-Fi and printing are usually available at the co-working spaces listed on Hotdesk. Be sure to check the specific listing for each co-working space to see what technology amenities are available.</p>

                 <p className='text-slate-800 text-base font-medium'>Q: Are there private phone booths or quiet areas available?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>:  Some co-working spaces listed on Hotdesk may have private phone booths or quiet areas available, while others may not. Be sure to check the specific listing for each co-working space to see what options are available.</p>
              </div>
          </div>
        </div>


      </div>
      <br />
      <br />
      <br />
      <br />
    </div>


  )

}
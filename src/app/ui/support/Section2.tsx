
"use client";



import Image from 'next/image'
import profile from '../../../../../public/img/Section2/UpProfile.png'
import EditInfo from '../../../../../public/img/Section2/EditInfo.png'




export default function Section2() {

  
  
  return (
    
    <div className=' pt-10 mx-14 scroll-smooth' id='section2'>
      <div className=' mx-14' >
        <div>
         <h1 className=" text-black text-xl font-medium	">Section 2. Account Management</h1>
        </div>
        <div className='flex flex-row mt-8'>
         <div className='flex flex-col basis-1/2 gap-8 mt-10'>
          <h3 className=" text-blue-900 text-base ml-20 font-medium">A. Uploading a Photo</h3>
          <p className=" text-slate-700 text-sm ml-28 flex  justify-start items-center">
          If you wish to have a profile image, simply upload your photo by clicking the Upload New Photo option and selecting an appropriate image for your account. 
          </p>
         </div>
         <div className="flex basis-1/2 justify-center items-center">
          <Image
              className=""
              src={profile}
              alt=""
              width={450}
              height={550}
            />
        </div>
        </div>
      </div>
      <div className=' mx-14'>
        <div className='flex flex-row mt-8'>
         <div className="flex basis-1/2 justify-center items-center">
          <Image
              className=""
              src={EditInfo}
              alt=""
              width={450}
              height={650}
            />
        </div>
        <div className='flex flex-col basis-1/2 gap-8 mt-10'>
          <h3 className=" text-blue-900 text-base ml-20 font-medium">B. Edit your Information</h3>
          <p className=" text-slate-700 text-sm ml-28 flex  justify-start items-center">
          If you want to change or correct some of your information, simply fill in the blanks with your first and last name, username, email address, and phone number. If you update your email, a new verification code will be sent to the new email address you enter. 
          <br />
          <br />
          <br />
          If you want to change your password, simply enter your existing password, and if it matches, enter a new password and confirm it again.
          </p>
         </div>
        </div>
      </div>
      
    </div>
  )
}

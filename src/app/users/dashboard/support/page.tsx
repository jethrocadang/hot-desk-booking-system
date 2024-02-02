
'use client';



import dynamic from 'next/dynamic';
import {BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import Section1 from '@/app/ui/support/Section1';
import Header from '@/app/ui/support/Header';
import Devider from '@/app/ui/support/Devider';
import Section4 from '@/app/ui/support/Section4';


export default function Support() {  
  return (
  
   
    <div className='bg-white h-full'>
        <Header />
        <br />
        <br />
        <Devider />
  

        {/* section 1 */}
        <Section1 />

        <br />
        <Devider />

        {/* Section 4 */}
        <Section4 />

    </div>
    
  )
}

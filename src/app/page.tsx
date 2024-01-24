
"use client";



import Image from 'next/image'
import dynamic from 'next/dynamic';




export default function Example() {

  const NavBar = dynamic(() => import('@/app/ui/landing/NavBar'), {
    ssr: true,
  });

  const MainContent = dynamic(() => import('@/app/ui/landing/maincontent'), {
    ssr: true,
  });

  const Tutorial = dynamic(() => import('@/app/ui/landing/tutoria'), {
    ssr: true,
  });

  const Activity = dynamic(() => import('@/app/ui/landing/activity'), {
    ssr: true,
  });

  const Faqs = dynamic(() => import('@/app/ui/landing/faqs'), {
    ssr: true,
  });

  const Footer = dynamic(() => import('@/app/ui/landing/footer'), {
    ssr: true,
  });
  return (
    
    <div className='relative'>
      
    {/* Navbar*/}
      <NavBar />

    {/* Maincontent */}
    <MainContent />
      
   
    {/* fOR tutorial */}
    <Tutorial />


    {/* Activity */}
    <Activity />

    {/* fOR FOOTER */}
    <Faqs />

    {/* Footer */}
     <Footer />

    </div>
  )
}

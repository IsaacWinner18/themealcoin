import React from 'react';
import Image from "next/image"
import Link from 'next/link';

export default function Footer() {
  return (
    <>

<div className=' text-white fixed bottom-0 right-0 left-0 mb-1'>
  <div className='flex justify-between items-center flex-1 mx-4 '>

      <button className="bg-[#800a80] px-8 py-1 rounded-lg">
        <Link href="/" className="flex flex-col items-center">
          <p><Image src="/real-estate-unscreen.gif" alt='home' width={40} height={40} unoptimized={true} /></p>
          <p className='font-bold'>HOME</p>
        </Link>
      </button>


      <button className="bg-[#800a80] px-8 py-1 rounded-lg">
        <Link href="/earn" className="flex flex-col items-center">
          <p><Image src="/earn-money-unscreen.gif" alt='hi' width={40} height={40} unoptimized={true} /></p>
          <p className='font-bold'>EARN</p>
        </Link>
      </button>
      <button className="bg-[#800a80] px-8 py-1 rounded-lg">
        <a href="/invite" className="flex flex-col items-center">
          <p><Image src="/add-user-unscreen.gif" alt='hi' width={40} height={40} unoptimized={true} /></p>
          <p className='font-bold'>INVITE</p>
        </a>
      </button>
      </div>
    </div>
    
    
    </>
  )
}

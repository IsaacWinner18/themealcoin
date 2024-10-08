import React from 'react'
import Image from 'next/image'
import { Roboto, Inter } from '@next/font/google';


const roboto = Roboto({ subsets: ['latin'], weight: ['400'], });
const inter = Inter({ subsets: ['latin'], weight: ['600'], });

export default function Main() {
  return (
    <>
    <div className='text-white text-center py-12 bg-[#780478] mt-2 rounded-tl-3xl rounded-tr-3xl space-y-3 overflow-hidden'>
        <div>
            <div className={`font-bold text-xl ${roboto.className}`}>Current Balance</div>
        </div>
        <div className='flex justify-center items-center'>
            <Image src="/arrow-up.svg" alt="arrow up" width={20} height={20} className='bg-[#ff75ff] rounded-3xl' />
            <span className={`font-extrabold ml-2 text-3xl ${inter.className}`}> 100</span>
            <span className='font-extrabold text-2xl mr-2'>.00</span> 
            <span className='font-bold text-lg'> MLC </span>
        </div>

        <div className='bg-[#ff75ff] inline-block px-12 rounded-xl'>
          <p >
            <span className='font-bold'>EARNING RATE </span>
            <span>+100.00 </span> 
            <span className='font-bold'>MLC</span>
            <span>/hr</span>
            </p>
        </div>
    </div>
    
    
    </>
  )
}

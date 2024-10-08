import React from 'react'
import Image from 'next/image';
import {Montserrat} from "next/font/google";
import Link from 'next/link';

const montserrat = Montserrat({subsets: ['latin'], weight: ['400', '600']});



export default function page() {
  return (
<>

<div>

    <div className='text-white'>


    <div className="flex items-center justify-between my-5 mx-6 ">
            <Link href="/">
          <div>
            <Image src="/arrow-left.svg" alt="hi" width={40} height={40} />
          </div>
          </Link>
          <div className={`mr-32 text-2xl font-bold ${montserrat.className}`}>Task</div>
        </div>


        <div className='space-y-4'>

        <div className='flex items-center justify-between m-2 p-2 rounded-xl bg-[#780478] '>
            <div className='flex items-center'>
        <div>
        
        <Image src="/task-highlight.gif" alt='hi' width={60} height={60} unoptimized={true} />
        </div>
        <div>
            <div>
                <p className='font-bold text-lg'>Join Our Youtube</p>
                <p>
                   <span className='font-extrabold mr-2'> MLC </span> 
                    <span className='font-semibold text-lg'>1 000 000</span>
                    </p>
            </div>
        </div>
        </div>
        

        <div className='mr-3'>
        <Image src="/chevron-right.svg" alt="arrow up" width={30} height={30} />
        </div>
        </div>

        <div className='flex items-center justify-between m-2 p-2 rounded-xl bg-[#780478]'>
            <div className='flex items-center'>
        <div>
        
        <Image src="/task-highlight.gif" alt='hi' width={60} height={60} unoptimized={true} />
        </div>
        <div>
            <div>
                <p className='font-bold text-lg'>Join Our Youtube</p>
                <p>
                   <span className='font-extrabold mr-2'> MLC </span> 
                    <span className='font-semibold text-lg'>1 000 000</span>
                    </p>
            </div>
        </div>
        </div>
        

        <div className='mr-3'>
        <Image src="/chevron-right.svg" alt="arrow up" width={30} height={30} />
        </div>
        </div>

        <div className='flex items-center justify-between m-2 p-2 rounded-xl bg-[#780478]'>
            <div className='flex items-center'>
        <div>
        
        <Image src="/task-highlight.gif" alt='hi' width={60} height={60} unoptimized={true} />
        </div>
        <div>
            <div>
                <p className='font-bold text-lg'>Join Our Youtube</p>
                <p>
                   <span className='font-extrabold mr-2'> MLC </span> 
                    <span className='font-semibold text-lg'>1 000 000</span>
                    </p>
            </div>
        </div>
        </div>
        

        <div className='mr-3'>
        <Image src="/chevron-right.svg" alt="arrow up" width={30} height={30} />
        </div>
        </div>

        <div className='flex items-center justify-between m-2 p-2 rounded-xl bg-[#780478]'>
            <div className='flex items-center'>
        <div>
        
        <Image src="/task-highlight.gif" alt='hi' width={60} height={60} unoptimized={true} />
        </div>
        <div>
            <div>
                <p className='font-bold text-lg'>Join Our Youtube</p>
                <p>
                   <span className='font-extrabold mr-2'> MLC </span> 
                    <span className='font-semibold text-lg'>1 000 000</span>
                    </p>
            </div>
        </div>
        </div>
        

        <div className='mr-3'>
        <Image src="/chevron-right.svg" alt="arrow up" width={30} height={30} />
        </div>
        </div>

        <div className='flex items-center justify-between m-2 p-2 rounded-xl bg-[#780478]'>
            <div className='flex items-center'>
        <div>
        
        <Image src="/task-highlight.gif" alt='hi' width={60} height={60} unoptimized={true} />
        </div>
        <div>
            <div>
                <p className='font-bold text-lg'>Join Our Youtube</p>
                <p>
                   <span className='font-extrabold mr-2'> MLC </span> 
                    <span className='font-semibold text-lg'>1 000 000</span>
                    </p>
            </div>
        </div>
        </div>
       
        

        <div className='mr-3'>
        <Image src="/checkmark.svg" alt="arrow up" width={30} height={30} />
        </div>
        </div>

        </div>  

    </div>

</div>


</>
  )
}

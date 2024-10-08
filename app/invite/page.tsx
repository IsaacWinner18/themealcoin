"use client"
import React from "react";
import { useState } from 'react';
import Image from "next/image";
import {Montserrat, Merriweather, Karla, Nunito} from "next/font/google";
import Link from 'next/link';

const montserrat = Montserrat({subsets: ['latin'], weight: ['400', '600']});

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700'], // Regular and Bold
  });

  const karla =  Karla({
    subsets: ['latin'],
    weight: ['400', '700'], // Regular and Bold
  });

  const nunito =  Nunito({
    subsets: ['latin'],
    weight: ['400', '700'], // Regular and Bold
  });

// const poppin = poppins({subsets: ['latin'], weight: ['400', '600']})

export default function Page() {

  const userId = 'isaacwinner';  
  const [referralCode, setReferralCode] = useState('');
  const [message, setMessage] = useState('');

  const generateReferral = async () => {
    if (!userId) {
      setMessage('User ID is not set');
      return;
    }

    const res = await fetch('http://localhost:5000/api/generate-referral', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    });

    // Check if the response is ok
    if (!res.ok) {
      setMessage('Error generating referral link');
      return;
    }

    const data = await res.json();

    setReferralCode(data.referralCode);
  };



  return (
    <>

{/* <div style={{ padding: '2rem' }}>

      {referralCode && (
        <div>
          <p>Your Referral Link:</p>
          <a href={`http://localhost:3000/referral/${referralCode}`}>
            http://localhost:3000/referral/{referralCode}
          </a>
        </div>
      )}

      {message && <p>{message}</p>}
    </div> */}



      <div className="text-white mx-2">
        <div className="flex items-center my-5 ">
            <Link href="/">
          <div>
            <Image src="/arrow-left.svg" alt="hi" width={40} height={40} />
          </div>
          </Link>
          <div className={`ml-14 text-2xl font-bold ${montserrat.className}`}>Referral program</div>
        </div>

        <div className="my-5">
          <div className={`${montserrat.className} font-semibold my-3`}>How it works?</div>
          <div className={`${montserrat.className} text-sm font-bold opacity-65 mr-16`}>
            Get bonuses from purchases of friends invited via your referral link
          </div>
        </div>

        <div className="my-7 bg-[#650165] py-2 rounded-2xl" style={{border: "1px solid pink"}}>
          <div className={`text-center font-bold opacity-85 ${merriweather.className}`}>You get from referral&apos;s donuts</div>
          <div className="flex items-center justify-around my-1 py-2 font-bold">
            <div className={`${karla.className} `}>
                <div className={` my-3`}>
              <span className="font-extrabold text-xl"> MLC </span> <span className={`text-3xl ${nunito.className}`}> 15% </span> 
              </div>
              <div className={`${nunito.className} `}>lvl.1 referrals</div>
            </div>

            <div className={`${karla.className} opacity-45 `}>
                <div className={` my-3`}>
                <span className="font-extrabold text-xl"> MLC </span> <span className={`text-3xl ${nunito.className}`}> 3% </span> 
              </div>
              <div className={`${nunito.className} `}>lvl.2 referrals</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-7 bg-[#650165] py-2 rounded-2xl" style={{border: "1px solid pink"}}>
          <div className={`text-center font-bold opacity-85 ${merriweather.className}`}>My Referrals</div>
          <div>

            <span className={`text-3xl font-bold ${nunito.className}`}> 0 </span>
          </div>
          <div className={`${nunito.className} `}>You have no referrals yet</div>
        </div>

        <div className={`font-bold text-center opacity-50 mb-10`}>But you can always invite some!</div>



<div className={`flex justifiy-between items-center gap-6 mx-5`}>
        <div className="bg-white py-1 px-1 rounded-full" onClick={generateReferral}>
            <Image src="/copy-icon.svg" alt="hi" width={40} height={40}  className="p-1"/>
          </div>

        {referralCode && (
        <div className="flex items-center justify-center space-x-4">
        
          
          <div className={`bg-[#650165] px-20 py-5 rounded-full font-bold text-xl ${nunito.className}`}>SHARE</div>
          {/* <a href={`http://localhost:3000/referral/${referralCode}`}>
            http://localhost:3000/referral/{referralCode} </a> */}
        </div>
)} {message && <p>{message}</p>}
</div>
      </div>
    </>
  );
}

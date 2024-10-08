import React from 'react'

export default function ClaimSection() {
  return (
    <>
    <div className='text-white py-10 bg-black overflow-hidden'>

      <div>
        <div className="marquee bg-[#800a80] mb-5 py-2 mx-6 rounded-lg overflow-hidden">
          <span> Join the fight against global hunger with MealCoin, a digital currency bringing food security to millions worldwide.
            </span>
          </div>
      </div>

        <div className='text-center bg-[#800a80] py-6 rounded-lg mx-6 overflow-hidden'>
            <div>
                <p className='font-bold py-2'>Next GRAB!</p>
                <button className='bg-[#ff75ff] text-2xl font-extrabold px-8 py-3 rounded-2xl'>Claim</button>
                <p className='py-2 font-bold text-lg opacity-80 '>1000 MLC Available</p>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

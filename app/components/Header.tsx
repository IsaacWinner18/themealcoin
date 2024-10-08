import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="rounded-bl-xl rounded-br-xl">
        <div className="flex items-center justify-between mx-4 p-2">
            <div className="text-white">
                <p className="font-bold">Isaac Winner</p>
                <div className="flex gap-2">
                  <p className="font-bold">ID: </p>
                <p>0087322</p>
                </div>
                
            </div>
            <div className="border-2 border-[#630b63] rounded-lg">
                <Image src="/wallet.gif" alt="wallet gif" width={48} height={48} unoptimized={true}/>
            </div>
        </div>
      </div>

    </>
  );
}

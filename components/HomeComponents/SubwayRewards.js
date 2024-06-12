import Image from 'next/image'
import React, { lazy } from 'react'
import subwayLogoWhite from '@/public/imgs/subway-logo-white.png'
export default function SubwayRewards() {
    return (
        <div className="w-full h-[75px] bg-[#97D700] absolute bottom-[0vh] rounded-t-[32px]">
            <div>
                <Image src={subwayLogoWhite}width={50} height={50}  alt='img'/>
            </div>
            <div>

            </div>
        </div>
    )
}

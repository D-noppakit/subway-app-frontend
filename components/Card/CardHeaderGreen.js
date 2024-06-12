'use client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react';
import ImagCardJHeader from "@/public/imgs/cardheader.png"
import LogoWhite from "@/public/logo/logo-small-white.png"
import IconClose from "@/public/icon/close-white.png"
export default function CardHeaderGreen({ children, close = () => console.log("ส่ง function ปิดมา") }) {
    return (
        <div className="absolute z-100 top-0  bg-[#F8F9FB] bg-opacity-80 w-full h-full">
            <div className=" rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg w-[90%]">
                <div className='h-[70px]rounded-t-3xl relative  '>
                    <Image src={ImagCardJHeader} alt='headerTile' style={{ objectFit: "contain", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }} />
                    <div className='absolute top-4 left-4' >
                        <Image src={LogoWhite} alt='logo' width={35} height={43} style={{ objectFit: "contain" }} />
                    </div>
                    <div className='absolute top-7 right-5' onClick={() => close(true)} >
                        <Image src={IconClose} alt='logo' width={20} height={20} style={{ objectFit: "contain" }} />
                    </div>
                </div>
                <div className='p-[20px] gap-[24px]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

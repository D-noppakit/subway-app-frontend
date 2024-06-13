import Image from 'next/image'
import React from 'react'
import ArrowGreenImg from "@/public/imgs/arrow-green.png"
import Bookmark from "@/public/imgs/bookmark.png"
import Link from 'next/link'
export default function TittleHeader({ textHeader = "ดีล & โปรโมชัน", img = Bookmark , LinkTo ='' }) {
    return (
        <div className='w-full text-[#008938]' >
            <div className={`flex justify-between items-center rounded-[100px] text-xl bt-custom`}>
                <div className='flex justify-center items-center '>
                    {img ? <Image src={img} width={25} height={25}
                        alt="Picture of the author" />:null}
                    
                    <div className='w-[5px]'></div>
                    <span className='text-[20px]'> {textHeader}</span>
                </div>

                <div className='w-[5px]'></div>
                {LinkTo && 
                <Link href={LinkTo} className='text-[14px] justify-center items-center flex border border-gray-200 border-3 p-2 rounded-3xl w-[100px]'>
                    <div className='font-[500]' >ทั้งหมด</div>
                    <div className='w-2'></div>
                    <div className='flex justify-center items-center'>
                        <Image src={ArrowGreenImg} width={14} height={14} ></Image>
                    </div>
                </Link>  }
                
            </div>
        </div>
    )
}

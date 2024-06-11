import Image from 'next/image'
import React from 'react'
import ArrowGreenImg from "@/public/imgs/arrow-green.png"
export default function TittleHeader({ textHeader = "ดีล & โปรโมชัน", img = ArrowGreenImg  }) {
    return (
        <div className='w-full h-[36px] ps-5 pe-5 mt-5 text-[#008938]' >
            <div className={`flex justify-between items-center p-3 ps-0 pe-0 rounded-[100px] text-xl bt-custom`}>
                <div className='flex justify-center items-center '>
                    <Image src={img} width={25} height={25}
                        alt="Picture of the author" />
                    <div className='w-[5px]'></div>
                    <span> {textHeader}</span>
                </div>

                <div className='w-[5px]'></div>
                <div className='flex border border-gray-200 border-3 p-2 rounded-3xl w-[100px]'>
                    <div>ทั้งหมด</div>
                    <div className='w-2'></div>
                    <div className='flex justify-center items-center'>
                        <Image src={ArrowGreenImg} width={25} height={25} ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

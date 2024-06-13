import Image from 'next/image'
import React from 'react'
import HomeImage from "@/public/imgs/home.png"
import TimeNav from "@/public/imgs/timenav.png"
export default function LocationAt({ NameLocation, Time, whenClick }) {
    return (
        <div className="p-3 w-[90%] h-[70px] bg-white absolute z-10 max-[375px]:top-[18vh] rounded-[16px] top-[13vh] min-[380px]:top[20vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid border-solid border-[--neutral500] border-[1px]">
            <div className='flex w-full h-full justify-between'>
                <div className='w-full h-full text-[#008938]'>

                    <div className='flex'>
                        <span className='mr-2'>
                            <Image src={HomeImage} alt='home' width={20} height={20}></Image>
                        </span>
                        <span className='flex text-[14px] fw-500]'>
                            <span className='pr-2'>รับที่ร้าน</span>
                            <span className='text-[#72747D]'>  <li> {NameLocation}</li> </span>
                        </span>
                    </div>
                    <div className='flex mt-2'>
                        <span className='mr-2'>
                            <Image src={TimeNav} alt='home' width={20} height={20}></Image>
                        </span>
                        <span className='text-[14px] fw-500'>ทันที</span>
                    </div>
                </div>
                <div onClick={whenClick} className='h-full w-[65px] flex justify-center items-center border border-gray-200 rounded-full px-[40px] py-[12px] text-[#008938]'>
                    เปลี่ยน
                </div>
            </div>
        </div>
    )
}

'use client'
import Image from 'next/image'

export default function CardHeaderGreen({ children, close = () => console.log("ส่ง function ปิดมา") }) {
    return (
        <div className="absolute z-100 top-0  bg-[#F8F9FB] bg-opacity-80 w-full h-full">
            <div className=" rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg w-[90%]">
               
                <div className='p-[20px] gap-[24px]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

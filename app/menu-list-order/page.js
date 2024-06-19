'use client'
import HeaderOne from '@/components/HeaderOne'
import React, { useState } from 'react'
import Image from "next/image"
import TimeImage from "@/public/imgs/timenav.png"
import SideNavBar from '@/components/HomeComponents/SideNavBar'
import { useRouter } from 'next/navigation'

export default function page() {
    const [isOpenBulgur, setIsOpenBulgur] = useState(false)
    const router = useRouter()
    const ClickBulgur = (state) => {
        console.log("ClickBulgur", state)
        setIsOpenBulgur(state)
    }
    // if (isOpenBulgur) {
    //     return <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
    // }
    return (
        <div className=''>
            {!isOpenBulgur && <HeaderOne CartCount={0} whenClickBulgur={ClickBulgur} />}

            <div className='h-screen' >
                <main className={`w-full h-[139px] bg-[#0b8a45] relative`}>
                    <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute h-[200px] " style={{ objectFit: "contain", overflow: "hidden" }}>
                        <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" className="w-full" width={1000} height={139} />

                    </div>
                </main>
                <div style={{ top: '70px', position: 'absolute' }} className='w-screen flex p-5  '>
                    <div className='bg-[--primary-subway-white] w-full border rounded-[16px] border-[--neutral300] pt-[10px] pb-[10px] ps-[16px] pe-[16px]  h-[93vh] overflow-auto hide-scrollbar'>
                        <div className='flex text-[24px] '>
                            <Image className='object-contain me-3' src={TimeImage} height={24} width={24} alt='iconTime' />
                            <div className='text-[#008938] text-[24px]'>ออเดอร์ของฉัน</div>
                        </div>
                        <div className='mt-5'>
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />
                            <CardListOrder Click={()=>{router.push("/receipt/123")}} />

                        </div>
                    </div>
                </div>
                <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
            </div>
        </div>
    )
}
const CardListOrder = ({ Click }) => {
    return <div onClick={Click} className='border-[#DFE0E7] border-1 border p-3 gap-2 rounded-lg my-5'>
        <div className='p-1 flex justify-between border-b-1 border-b-[#E8EAF1] border-b '>
            <div>14 พ.ค. 2024  -  12:15 น.</div>
            <div>
                <span>฿269</span>
            </div>
        </div>
        <div className='flex mt-3 items-center'>
            <Image className='object-contain me-3' src={"/icon/Location-Pin.png"} height={18} width={18} alt='img' />
            <div className='w-[30%] pe-1 text-[#008938] text-[14px]'>รับที่ร้าน</div>
            <div className='w-max overflow-hidden overflow-ellipsis whitespace-nowrap text-[12px] text-[#2C2C30] mt-1  '>แม็กซ์แวลู, 255 ทางหลวงพิเศษหมาย เลข 7 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250</div>
        </div>
        <div className='flex mt-3'>
            <Image className='object-contain me-3' src={"/icon/CircleClock.png"} height={18} width={18} alt='imag' />
            <div className='w-[10%] pe-1 text-[#008938] text-[14px]'>ทันที</div>
            <div className='w-[80%] overflow-hidden overflow-ellipsis whitespace-nowrap text-[12px] text-[#2C2C30]'></div>
        </div>
    </div>
}


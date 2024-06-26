"use client"
import ButtonCustom from '@/components/Button/ButtonCustom';
import CardBGWhite from '@/components/Card/CardBGWhite';
import React, { useState } from 'react';
import Store1 from "@/public/icon/Store-1.png"
import information from "@/public/icon/information-circle--information-frame-info-more-help-point-circle.png"
import Image from 'next/image';
import CardHeaderGreen from '@/components/Card/CardHeaderGreen';
import ImagePhone from "@/public/icon/phone.png"
import ImageMap1 from "@/public/icon/map1.png"
import { useRouter } from 'next/navigation';
import GMap from '@/components/Map/Map'

export default function Map() {
    const router = useRouter();
    const [closeInfo, setCloseInfo] = useState(false)
    const mock = Array.from({ length: 10 }, (_, index) => "1")
    return (
        <div className='h-screen w-screen relative bg-slate-400'>
            <GMap />

            <div className='h-77px absolute z-[10] top-0 w-full inline-flex items-center outline-none p-1'>
                <div className='flex justify-between items-center h-[77px] px-4 w-full'>

                    <Image onClick={() => { router.back() }} alt='close' src={"/icon/Close-green.png"} height={45} width={45} style={{ objectFit: "contain" }} />

                    <input className='border border-1 border-[#DFE0E7] rounded-3xl h-[45px] w-5/6 outline-none p-[16px]' placeholder='ค้นหาสาขา' />
                </div>
            </div>
            {/* map in this  */}
            <div className="inline-flex flex-col absolute bg-[#008938] h-2/3 bottom-0 rounded-t-3xl p-4 w-full">
                <div className="flex w-full justify-between items-center">
                    <div className="text-[14px] text-white flex items-center justify-center">เลือกสาขา</div>
                    <div className="w-[140px] h-[50px] py-[6px] px-[12px]">
                        <ButtonCustom btnText={"สาขาใกล้ฉัน"} textSize="14px" img="" type={"secondary"} />
                    </div>
                </div>
                <div className="flex flex-col overflow-y-auto max-h-[60vh] hide-scrollbar ">

                    {mock.map((_, index) => {
                        return <CardBGWhite key={index}>
                            <div onClick={() => setCloseInfo(true)}>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center' >
                                        <div className='me-2'><Image src={Store1} width={16} height={16} alt='icon-home' /></div>
                                        <div>ซับเวย์ แม็กซ์แวลูพัฒนาการ </div>
                                    </div>
                                    <div className='flex self-start'>
                                        <Image src={information} width={16} height={16} alt='image information' />
                                    </div>
                                </div>
                                <div className='text-[12px] text-[#72747D] my-3'>
                                    แม็กซ์แวลู, 255 ทางหลวงพิเศษหมาย เลข 7 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <div className='flex'>
                                        <div className=' px-2 bg-[#97D700] text-white rounded-2xl me-3'>เปิด</div>
                                        <div className='text-[#A3A6B7] text-[14px] flex justify-center items-center'> ปิดเวลา 19:30 น.</div>
                                    </div>
                                    <div>0.10 กม.</div>
                                </div>
                            </div>
                        </CardBGWhite>
                    })}

                </div>
            </div>
            {closeInfo && <CardHeaderGreen close={() => setCloseInfo(false)} titleHeader={"ซับเวย์ แม็กซ์แวลูพัฒนาการ "}>
                <div className='flex gap-2 flex-col'>
                    <div className='flex'>
                        <div className=' px-2 bg-[#97D700] text-white rounded-2xl me-3'>เปิด</div>
                    </div>
                    <div className='text-[#72747D] text-[12px]'>
                        แม็กซ์แวลู, 255 ทางหลวงพิเศษหมาย เลข 7 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250
                    </div>
                    <div className='text-[12px]'>0.10 กม.</div>
                    <div className='text-[12px]'>ทุกวัน 7:00 - 19:30 น.</div>
                    <div className='flex justify-between'>
                        <div className='text-[#008938] text-[14px] flex'>
                            <div className='me-1'>
                                <Image src={ImagePhone} height={18} width={18} alt='phoneimage' />
                            </div>
                            <div></div>
                            ติดต่อร้าน
                        </div>
                        <div className='text-[14px]'>02-343-4322</div>
                    </div>
                    <button className='text-[16px] text-[#008938] flex justify-center items-center bg-[#F8F9FB] w-full h-[56px] rounded-3xl'>
                        <Image className='me-2' src={ImageMap1} width={24} height={24} alt='map' />
                        <span>ดูแผนที่</span>
                    </button>
                </div>
            </CardHeaderGreen>}

        </div>
    );
}

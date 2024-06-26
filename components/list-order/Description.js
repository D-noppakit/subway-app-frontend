"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ButtonWhiteBorderGray from '../Button/ButtonWhiteBorderGray'
import store from "@/lib/store"
export default function Description() {
    const { Description, setDescription } = store();
    useEffect(() => {
        console.log({ Description })
    }, [Description])

    const handleChange = (e) => {
        setDescription(e.target.value);
    };
    return (
        <div className='bg-white flex flex-col justify-start items-start rounded-2xl p-3 relative mt-3 h-[110px] w-full'>
            <div className='flex justify-start'>
                <div className='flex justify-center items-center pe-3 self-start '>
                    <Image src={"/icon/msg.png"} width={24} height={24} alt='msg' />
                </div>
                <div className='text-[#008938] text-[22px]'>คำขอเพิ่มเติม <span className='text-[#72747D] text-[16px]'> ไม่บังคับ</span></div>

            </div>
            <div className='w-full h-[48px]'>
                <ButtonWhiteBorderGray height='48px' >
                    <div className='p-2 w-full'>
                        <input value={Description}
                            onChange={handleChange} className='w-full outline-none' placeholder='เช่น ไม่อุ่นร้อน, แบ่งฟุตลองเป็น 2 ชิ้น' />
                    </div>
                </ButtonWhiteBorderGray>
            </div>
        </div>
    )
}

'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Description() {
    const [openInput, seOpenInput] = useState(false)
    return (
        <div className='bg-[#00491E] flex flex-col justify-start items-start rounded-2xl p-3 relative mt-3  w-full'>
            <div className='flex justify-start'>
                <div className="flex">
                    <div className="w-[19px] h-[19px] me-3">
                        <Image alt='hospital' src={"/icon/hospital-white.png"} width={19} height={19} style={{ objectFit: "contain" }} />
                    </div>
                    <div className='text-white'>คุณมีประวัติแพ้อาหารหรือไม่?</div>
                </div>
            </div>
            <div className='w-full h-[48px] text-white font-[400] text-[12px]' >
                หากคุณกังวลเกี่ยวกับการแพ้อาหาร พนักงานจะไม่ใส่วัตถุดิบ
                ที่อาจทำให้เกิดการแพ้อาหารตามที่คุณระบุไว้
            </div>
            <div className='w-full flex justify-around items-center text-white'>
                <button onClick={()=>seOpenInput(true)} className={`px-[12px] py-[6px] border border-1  w-[155px] rounded-[100px] ${ openInput ? "bg-[#F2B700]" : "border-[#DFE0E7]"}`}>แพ้อาหาร</button>
                <button onClick={()=>seOpenInput(false)} className={`px-[12px] py-[6px] border border-1 w-[155px] rounded-[100px]  ${ !openInput ? 'bg-[#F2B700]' :' border-[#DFE0E7]' } `}>ไม่แพ้อาหาร</button>
            </div>
            {openInput && <div className='w-full'>
                <div className='text-[14px] text-white my-3'>คุณแพ้อาหารชนิดใด? <span className='text-red-600'>*</span></div>
                <input className='bg-white outline-none p-4 w-full rounded-3xl' />
            </div>}

        </div>
    )
}

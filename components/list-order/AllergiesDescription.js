import Image from 'next/image'
import React from 'react'
import ButtonWhiteBorderGray from '../Button/ButtonWhiteBorderGray'

export default function Description() {
    return (
        <div className='bg-[#00491E] flex flex-col justify-start items-start rounded-2xl p-3 relative mt-3  w-full'>
            <div className='flex justify-start'>
                <div className="flex">
                    <div className="w-[19px] h-[19px] me-3">
                        <Image src={"/icon/hospital-white.png"} width={19} height={19} style={{ objectFit: "contain" }} />
                    </div>
                    <div className='text-white'>คุณมีประวัติแพ้อาหารหรือไม่?</div>
                </div>
            </div>
            <div className='w-full h-[48px] text-white font-[400] text-[12px]' >
                หากคุณกังวลเกี่ยวกับการแพ้อาหาร พนักงานจะไม่ใส่วัตถุดิบ
                ที่อาจทำให้เกิดการแพ้อาหารตามที่คุณระบุไว้
            </div>
            <div className='w-full flex justify-around items-center text-white'>

                <button className='px-[12px] py-[6px] border border-1 border-[#DFE0E7] w-[155px] rounded-[100px] active:bg-[#F2B700]'>แพ้อาหาร</button>
                <button className='px-[12px] py-[6px] border border-1 border-[#DFE0E7] w-[155px] rounded-[100px] active:bg-[#F2B700]'>ไม่แพ้อาหาร</button>
            </div>
        </div>
    )
}

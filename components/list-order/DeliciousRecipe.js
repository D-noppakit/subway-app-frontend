'use client'
import React, { useState } from 'react';
import SwitchComponent from '../Switch/Switch';
import Image from 'next/image';

export default function DeliciousRecipe() {
    const [checked, setChecked] = useState(false);
    return (
        <div className='w-full bg-[#FFF4EA] rounded-2xl relative'>
            <div className='w-full flex justify-between items-center p-3 bg-[#FF8356] rounded-t-2xl'>
                <div className='flex'>
                    <div className='mr-2'>
                        <Image alt='like' src={"/icon/like.png"} width={24} height={24} style={{ objectFit: "contain" }} />
                    </div>
                    <div className='text-white' >อร่อยง่ายๆ ตามสูตร</div>
                </div>
                <div>
                    <SwitchComponent checked={checked} setChecked={setChecked} />
                </div>
            </div>
            <div className='p-3 text-[12px] w-full flex'>
                <div className='w-[20%] flex justify-center items-start'>
                    <Image alt='information-orange' src={"/icon/information-orange.png"} width={19} height={19} style={{ objectFit: "contain" }} />
                </div>
                <div className='text-[#72747D] text-[12px]'>
                    ตามสูตรอาจมีวัตถุดิบที่ก่อให้เกิดการแพ้อาหาร หากคุณมี
                    ประวัติแพ้อาหารบางชนิด โปรดระบุในขั้นตอนสุดท้าย
                </div>
            </div>
            {/* Add more content or components here */}
        </div>
    );
}
'use client'// CalOrder.js
import React, { useEffect } from 'react';
import store from '@/lib/store';
import ButtonCustom from '../Button/ButtonCustom';


export default function CalOrder() {
    const { count, increaseCount, decreaseCount ,  DataOrderListConfirm} = store();
    if (true) {
        return (
            <div className='h-[75px] bg-white absolute bottom-0 z-40 w-full p-4 flex justify-center items-center'>
                <div className='flex items-center justify-between w-full h-10'>
                    <div className='w-1/3 flex justify-between items-center h-full '>
                        <div onClick={decreaseCount} className='bg-[#028937] h-[30px] w-[30px] flex items-center justify-center rounded-full text-white text-[32px] pb-1'>-</div>
                        <div className='text-[#F2B700] font-[700] text-[24px]'>{count}</div>
                        <div onClick={increaseCount} className='bg-[#028937] h-[30px] w-[30px] flex items-center justify-center rounded-full text-white text-[32px] pb-1'>+</div>
                    </div>
                    <div className='w-[50%] self-end '>
                        <ButtonCustom textSize='18px' img={""} btnText={"เพิ่มออเดอร์ ฿185"} type={"primary"} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<></>)
    }


}

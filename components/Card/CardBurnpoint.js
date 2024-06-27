'use client'
import React from 'react'
import Image from "next/image";
export default function CardBurnpoint({ maxcardno }) {
    console.log(maxcardno);
    return (
        <div className="w-full px-5 mb-[15px]">
            <span className="text-[#0C8A44] text-[16px] font-bold">ใช้แมกซ์ พอยท์ เป็นส่วนลด</span>
            <div className="relative flex flex-col items-center">
                <div className={`h-[184px] w-full rounded-[15px] flex flex-col mt-[5px] border border-[#DCDEE6] border-solid gap-[10px] justify-between ${maxcardno ? "" : " opacity-20"}`}>
                    <div className="flex justify-between items-center px-[15px] mt-[15px]">
                        <div className="flex flex-col">
                            <span>แต้มคงเหลือ</span>
                            <span className="text-[14px] text-[#6B6F80]">10 แต้ม = ฿1.00</span>
                        </div>
                        <div className="flex items-center">
                            <Image src={"/icon/CoinMax.png"} alt="maxpoincoin" className="w-[16px] h-[16px] mr-[5px]" width={100} height={100} />
                            <span className="text-[14px] text-[#141519]">2,000</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-[13px] w-full">
                        <div className="border border-[#BBBFCC] border-solid w-[43.5%] h-[50px] rounded-[10px] flex items-center justify-center">
                            <input disabled={maxcardno ? false : true} className="w-full bg-transparent outline-none text-center font-normal" placeholder="ระบุจำนวนแต้ม"></input>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={"/icon/ArrowRight.png"} alt="arrowright" className="w-[10px] h-[20px]" width={24} height={24} />
                        </div>
                        <div className="rounded-[10px] bg-[#F6F7F9] w-[43.5%] h-[50px] flex items-center justify-center text-[#838799] font-normal">
                            <span>฿0.00</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-[#FF822B] rounded-b-[15px] h-[33px] items-center text-[14px] text-white font-normal">
                        <span>*วันนี้สามารถใช้แต้มทำรายการได้สูงสุด: 50,000 แต้ม</span>
                    </div>
                </div>
                <div className={`rounded-[70px] bg-[#F2B700] w-[65%] items-center justify-center text-white h-[37px] absolute top-[40%] ${maxcardno ? ' hidden' : ' flex'}`}>
                    <span>ลงชื่อเข้าใช้เพื่อใช้งานฟีเจอร์</span>
                </div>
            </div>
        </div>
    )
}


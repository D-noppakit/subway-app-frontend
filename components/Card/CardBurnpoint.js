'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import store from "@/lib/store"
export default function CardBurnpoint({ maxcardno, whenClick }) {
    const [isDisabled, setIsDisabled] = useState('N');
    const [opacityValue, setopacityValue] = useState('');
    const [isFlex, setIsFlex] = useState('flex');
    const [pointUse, setPointUse] = useState('');
    const [pointToBaht, setPointToBaht] = useState('0.00');
    const { PhoneNO, OnChangePhoneNo, UserInfo, SetUserInfo, setIsLoginApp } = store();
    useEffect(() => {
        checkClientSideCondition()
    }, []);
    const checkClientSideCondition = () => {
        if (maxcardno == 'Y') {
            setIsDisabled(false);
            setopacityValue('')
            setIsFlex('hidden')
        } else {
            setIsDisabled(true);
            setopacityValue(' opacity-20')
            setIsFlex('flex')
        }
    };

    const burnPoint = (value) => {
        let pointtobaht = '0.00'
        if (value >= 10) {
            if (value.slice(-1) != '0') {
                value = value.replace(/.$/, "0")
            }
            pointtobaht = (value / 10).toFixed(2)
        } else {

        }
        setPointUse(value)
        setPointToBaht(pointtobaht)
    }

    const clearBurnPoint = () => {
        setPointUse('')
        setPointToBaht('0.00')
    }
    return (
        <div className="w-full px-5 mb-[15px]">
            <span className="text-[#0C8A44] text-[16px] font-bold">ใช้แมกซ์ พอยท์ เป็นส่วนลด</span>
            <div className="relative flex flex-col items-center">
                <div className={`h-[184px] w-full rounded-[15px] flex flex-col mt-[5px] border border-[#DCDEE6] border-solid gap-[10px] justify-between ${opacityValue}`}>
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
                            <input inputMode='decimal' type='number' onInput={(e) => {
                                const value = e.target.value;
                                if (/^\d{0,5}$/.test(value)) { // ตรวจสอบว่าเป็นตัวเลขไม่เกิน 10 ตัว
                                    burnPoint(value); // ถ้าถูกต้องให้ set ค่าเข้า state
                                }
                            }} disabled={isDisabled} className="w-full bg-transparent outline-none text-center font-normal" placeholder="ระบุจำนวนแต้ม" value={pointUse} onClick={clearBurnPoint}/>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={"/icon/ArrowRight.png"} alt="arrowright" className="w-[10px] h-[20px]" width={24} height={24} />
                        </div>
                        <div className="rounded-[10px] bg-[#F6F7F9] w-[43.5%] h-[50px] flex items-center justify-center text-[#838799] font-normal">
                            <span>฿{pointToBaht}</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-[#FF822B] rounded-b-[15px] h-[33px] items-center text-[14px] text-white font-normal">
                        <span>*วันนี้สามารถใช้แต้มทำรายการได้สูงสุด: 50,000 แต้ม</span>
                    </div>
                </div>
                <div onClick={whenClick} className={`rounded-[70px] bg-[#F2B700] w-[65%] items-center justify-center text-white h-[37px] absolute top-[40%] ${isFlex}`}>
                    <span>ลงชื่อเข้าใช้เพื่อใช้งานฟีเจอร์</span>
                </div>
            </div>
        </div>
    )
}


"use client"
import React, { useState, lazy, useEffect } from 'react';
import HeaderTwo from "@/components/HeaderTwo"
import CardWelcomeCustomer from "@/components/CardWelcomeCustomer"
import Image from 'next/image';
import logo1 from "@/public/imgs/timenav.png"
import choiceMark from "@/public/imgs/Choice-Mark.png"
import PinMap from "@/public/imgs/pin-map.png"
import PersonSetting from "@/public/imgs/user-setting-bolt-nut.png"
import QAimg from "@/public/imgs/QAimg.png"
import CardHeaderGreen from "@/components/Card/CardHeaderGreen"
import ButtonCustom from '../Button/ButtonCustom'
import ButtonMenu from '@/components/Button/ButtonMenu';
import store from '@/lib/store';

export default function SideNavBar({ isOpen = false, Close = () => console.log("Close") }) {
    const [isOpenCard, setIsCard] = useState(false);
    const [isConfirmOTP, setIsConfirmOTP] = useState(false);
    const { PhoneOTPValue, OnChangePhoneOTPValue, SendOTP } = store()
    const handleClose = () => {
        Close(!isOpen)
    }
    const CloseCard = () => {
        setIsCard(false)
    }
    const OpenCard = () => {
        setIsCard(true)
    }

    return (
        <div >
            <div className={`fixed top-0 left-0 h-full bg-gray-100 transition-transform duration-300 ease-out ${isOpen ? 'w-full transform translate-x-0' : 'w-[-100px] transform -translate-x-full'}`} >
                {isOpen && <HeaderTwo Close={handleClose} />}
                <div className="p-4 relative">
                    <div className=' relative mt-1 mb-5 flex justify-center w-full h-full'>
                        <CardWelcomeCustomer whenClick={OpenCard} text1={"ลงชื่อเข้าใช้"} text2={"ปลดล็อคสิทธิประโยชน์อีกเพียบ ด้วยสมาชิก ซับเวย์ รีวอร์ด"} btnText={"ลงชื่อเข้าใช้ / สมัครสมาชิก"} type={1} />
                    </div>
                    <ButtonMenu text={"ออเดอร์ของฉัน"} img={logo1} />
                    <ButtonMenu text={"ซับเวย์ รีวอร์ด"} img={choiceMark} />
                    <ButtonMenu text={"ค้นหาสาขา"} img={PinMap} />
                    <ButtonMenu text={"ตั้งค่าโปรไฟล์"} img={PersonSetting} />
                    <ButtonMenu text={"ช่วยเหลือ"} img={QAimg} />
                </div>
                {isOpenCard && <CardHeaderGreen close={CloseCard}>
                    <h2 className="text-2xl font-bold text-[#008938]">ลงชื่อเข้าใช้</h2>
                    <p className="text-[#2C2C30] text-[14px]">กรอกหมายเลขโทรศัพท์ของคุณเพื่อเริ่มใช้งาน</p>
                    <div className={`flex h-[50px] justify-center items-center my-5 text-[#DFE0E7] w-full border border-1 rounded-3xl relative p-1 text-lg`} >
                        <div className='flex justify-start items-center w-24 p-3 rounded-[100px] text-xl bt-custom'>66+ |</div>
                        <input value={PhoneOTPValue} onChange={OnChangePhoneOTPValue} className={`h-full w-full outline-none text-black`} placeholder='123-456-789' />
                    </div>
                    <ButtonCustom type={'primary'} width='100%' img='' btnText={"เข้าสู่ระบบ"} isDisabled={false} whenClick={SendOTP} />
                    <div className={`flex h-[32px] w-full justify-center items-center my-5 rounded-3xl relative p-1 text-lg`} >
                        <div className={`flex h-[32px] justify-center items-center w-[120px]] border border-1 rounded-3xl relative p-1 text-lg`}>
                            <div className='text-[#008938] w flex justify-start items-center p-3 rounded-[100px] text-sm bt-custom'>เข้าใช้โดยไม่เป็นสมาชิก</div>
                        </div>
                    </div>
                </CardHeaderGreen>}

            </div>
        </div>
    );
}


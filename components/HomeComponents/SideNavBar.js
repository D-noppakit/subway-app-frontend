"use client"
import React, { useState, lazy, useEffect } from 'react';
import HeaderTwo from "@/components/HeaderTwo"
import CardWelcomeCustomer from "@/components/CardWelcomeCustomer"
import logo1 from "@/public/imgs/timenav.png"
import choiceMark from "@/public/imgs/Choice-Mark.png"
import PinMap from "@/public/imgs/pin-map.png"
import PersonSetting from "@/public/imgs/user-setting-bolt-nut.png"
import QAimg from "@/public/imgs/QAimg.png"
import CardHeaderGreen from "@/components/Card/CardHeaderGreen"
import ButtonCustom from '../Button/ButtonCustom'
import ButtonMenu from '@/components/Button/ButtonMenu';
import OtpInput from 'react-otp-input';
import ButtonWhiteBorderGray from '../Button/ButtonWhiteBorderGray';
import Loading from '../Loading';
import CardLoginSuccess from "@/components/Card/CardLoginSuccess"
import Image from 'next/image';
import FlowLogin from '../Navbar/FlowLogin';



export default function SideNavBar({ isOpen = false, Close = () => console.log("Close") }) {
    const [isOpenCard, setIsCard] = useState(false);
    const [isConfirmOTP, setIsConfirmOTP] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isLogin, SetIsLogin] = useState(false);
    const GotoHome = () => {
        SetIsLogin(false)
        setLoading(false)
        setIsConfirmOTP(false)
        setIsCard(false)
        handleClose()
    }
    const handleClose = () => {
        Close(!isOpen)
    }
    const CloseCard = () => {
        setLoading(false)
        setIsConfirmOTP(false)
        setIsCard(false)
        setIsCard(false)
    }
    const OpenCard = () => {
        setIsCard(true)
    }
    const CheckPhoneNo = async (phoneno) => {
        console.log({ phoneno })
        const req = await fetch("http://localhost:3003/api/v1/profile/subway/checkphone", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneno: phoneno
            }),
        });

        const data = await req.json();
        console.log(data);
        setIsConfirmOTP(true);
    }


    return (
        <div >
            {isLoading && <Loading />}
            <div className={`fixed top-0 left-0 h-full bg-gray-100 transition-transform duration-300 ease-out ${isOpen ? 'w-full transform translate-x-0' : 'w-[-100px] transform -translate-x-full'}`} >
                <HeaderTwo Close={handleClose} />
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
                <div className='py-[8px] px-[16px] w-full  h-[40px] flex justify-center items-center mt-5'>
                    <ButtonWhiteBorderGray height='40px'>
                        <div className='text-[#FF5C39] leading-5 font-[500] py-[8px] px-[16px] text-center'>ออกจากระบบ</div>
                    </ButtonWhiteBorderGray>
                </div>
                <div className='text-[#00491E] text-[10px] flex flex-col items-center mt-5'>
                    <div className=''>นโยบายความเป็นส่วนตัวของ Subway</div>
                    <div>ข้อกำหนดการใช้งาน การตั้งค่าคุกกี้</div>
                </div>
                <div className='text-[#A3A6B7] text-center text-[10px] mt-5'>ลิขสิทธิ์ Subway Thailand 2024 สงวนลิขสิทธิ์</div>
                <FlowLogin SetIsLogin={SetIsLogin} setLoading ={setLoading} setIsCard = {setIsCard} setIsConfirmOTP ={setIsConfirmOTP}  isOpenCard = {isOpenCard} isConfirmOTP={isConfirmOTP} CloseCard={CloseCard} />
                {isLogin && <CardLoginSuccess>
                    <div className='absolute h-full top-0 left-0'>
                        <Image className='' alt='bg-wallcome' width={3000} height={100} style={{width:"100vw"}} src={"/bg-image/bg-wallcome.png"} />
                    </div>
                    <div className='gap-3 flex justify-center items-center flex-col my-5 relative z-20'>
                        <Image src={"/imgs/subway-logo-white.png"} height={80} width={80} style={{ objectFit: "contain" }} alt="bg" />
                        <div>
                            <div className='text-[24px] font-[500] text-center'> ยินดีต้อนรับ</div>
                            <div className='text-[32px] font-[700] text-center'> คุณมาคัส</div>
                            <div className='text-[16px] font-[500] text-center'>
                                คุณสมัครเป็นสมาชิกซับเวย์สำเร็จ!
                                เช็กสิทธิพิเศษและเริ่มสั่งออเดอร์ได้ทันที</div>
                        </div>

                        <div className='w-[160px]'>
                            <ButtonCustom type={"secondary"} btnText={"สั่งออเดอร์"} />
                        </div>

                        <div className='w-[130px]'>
                            <ButtonCustom type={"primary"} img='' btnText={"กลับสู่หน้าหลัก"} textSize='16px' whenClick={GotoHome} />
                        </div>
                    </div>
                    
                </CardLoginSuccess>}
            </div>
        </div>
    );
}



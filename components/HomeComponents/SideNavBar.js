"use client"
import React, { useState, lazy, useEffect } from 'react';
import HeaderTwo from "@/components/HeaderTwo"
import CardWelcomeCustomer from "@/components/CardWelcomeCustomer"
import logo1 from "@/public/imgs/timenav.png"
import choiceMark from "@/public/imgs/Choice-Mark.png"
import PinMap from "@/public/imgs/pin-map.png"
import PersonSetting from "@/public/imgs/user-setting-bolt-nut.png"
import QAimg from "@/public/imgs/QAimg.png"
import ButtonCustom from '../Button/ButtonCustom'
import ButtonMenu from '@/components/Button/ButtonMenu';
import ButtonWhiteBorderGray from '../Button/ButtonWhiteBorderGray';
import Loading from '../Loading';
import CardLoginSuccess from "@/components/Card/CardLoginSuccess"
import Image from 'next/image';
import FlowLogin from '../Navbar/FlowLogin';
import store from "@/lib/store"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SideNavBar({ isOpen = false, Close = () => console.log("Close")  }) {
    const router = useRouter()
    const [isOpenCard, setIsCard] = useState(false);
    const [isConfirmOTP, setIsConfirmOTP] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isLogin, SetIsLogin] = useState(false);
    const [isLoginClient, SetIsLoginClient] = useState(false);
    const { UserInfo } = store();
    const [CusName, setCusName] = useState("")
    const { IsLoginApp, ClearAllData } = store()
    useEffect(() => {
        setCusName(UserInfo?.customerName)
    }, [UserInfo])
    useEffect(() => {
        SetIsLoginClient(IsLoginApp)
    }, [IsLoginApp])
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
    return (
        <div >
            {isLoading && <Loading />}
            <div className={`fixed top-0 left-0 h-full bg-gray-100 transition-transform duration-300 ease-out ${isOpen ? 'w-full transform translate-x-0' : 'w-[-100px] transform -translate-x-full'}`} >
                <HeaderTwo Close={handleClose} />
                <div className="p-4 relative">
                    <div className=' relative mt-1 mb-5 flex justify-center w-full h-full'>
                        <CardWelcomeCustomer
                            whenClick={isLoginClient ? () => { router.push("/category") } : OpenCard}
                            text1={isLoginClient ? ("สวัสดี คุณ" + CusName) : ("ลงชื่อเข้าใช้")}
                            text2={isLoginClient ? "วันนี้รับเมนูไหนดีครับ... สั่งออเดอร์ Subway ที่นี่ แล้วไปรับหน้าร้านได้เลย!" : "ปลดล็อคสิทธิประโยชน์อีกเพียบ ด้วยสมาชิก ซับเวย์ รีวอร์ด"}
                            btnText={isLoginClient ? "สั่งออเดอร์" : "ลงชื่อเข้าใช้ / สมัครสมาชิก"}
                            type={isLoginClient ? 2 : 1}
                        />
                    </div>
                    <Link href={"/menu-list-order"}>
                        <ButtonMenu text={"ออเดอร์ของฉัน"} img={logo1} />
                    </Link>
                    <ButtonMenu text={"ซับเวย์ รีวอร์ด"} img={choiceMark} />
                    {/* <Link href={"/map"}>
                    </Link> */}
                    <ButtonMenu text={"ค้นหาสาขา"} img={PinMap} />
                    <Link href={"/profile"}>
                        <ButtonMenu text={"ตั้งค่าโปรไฟล์"} img={PersonSetting} />
                    </Link>
                    <Link href={"/help"}>
                        <ButtonMenu text={"ช่วยเหลือ"} img={QAimg} />
                    </Link>
                </div>
                <div className='py-[8px] px-[16px] w-full  h-[40px] flex justify-center items-center mt-5'>
                    <ButtonWhiteBorderGray height='40px' Click={ClearAllData}>
                        <div className='text-[#FF5C39] leading-5 font-[500] py-[8px] px-[16px] text-center'>ออกจากระบบ</div>
                    </ButtonWhiteBorderGray>
                </div>
                <div className='text-[#00491E] text-[10px] flex flex-col items-center mt-5'>
                    <div className=''>นโยบายความเป็นส่วนตัวของ Subway</div>
                    <div>ข้อกำหนดการใช้งาน การตั้งค่าคุกกี้</div>
                </div>
                <div className='text-[#A3A6B7] text-center text-[10px] mt-5'>ลิขสิทธิ์ Subway Thailand 2024 สงวนลิขสิทธิ์</div>
                <FlowLogin SetIsLogin={SetIsLogin} setLoading={setLoading} setIsCard={setIsCard} setIsConfirmOTP={setIsConfirmOTP} isOpenCard={isOpenCard} isConfirmOTP={isConfirmOTP} CloseCard={CloseCard} />
                {isLogin && <CardLoginSuccess>
                    <div className='absolute h-full top-0 left-0'>
                        <Image className='' alt='bg-wallcome' width={3000} height={100} style={{ width: "100vw" }} src={"/bg-image/bg-wallcome.png"} />
                    </div>
                    <div className='gap-3 flex justify-center items-center flex-col my-5 relative z-20'>
                        <Image src={"/imgs/subway-logo-white.png"} height={80} width={80} style={{ objectFit: "contain" }} alt="bg" />
                        <div>
                            <div className='text-[24px] font-[500] text-center'> ยินดีต้อนรับ</div>
                            <div className='text-[32px] font-[700] text-center'> คุณ <span>{CusName}</span> </div>
                            <div className='text-[16px] font-[500] text-center'>
                                คุณสมัครเป็นสมาชิกซับเวย์สำเร็จ!
                                เช็กสิทธิพิเศษและเริ่มสั่งออเดอร์ได้ทันที
                            </div>
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



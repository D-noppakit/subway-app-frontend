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

export default function SideNavBar({ isOpen = false, Close = () => console.log("Close") }) {
    const [isOpenCard, setIsCard] = useState(false);
    const [isConfirmOTP, setIsConfirmOTP] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const handleClose = () => {
        Close(!isOpen)
    }
    const CloseCard = () => {
        setIsCard(false)
    }
    const OpenCard = () => {
        setIsCard(true)
    }

    const FlowLogin = ({ Phoneno = "", OTPRef, OTPTime }) => {
        const [PhoneOTPValue, setPhoneOTPValue] = useState("")
        const [otp, setOtp] = useState('');
        const Login = () => {
            console.log("login")
            setLoading(true)
            setIsCard(false)
            setIsConfirmOTP(false)
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }
        if (isOpenCard) {
            if (isConfirmOTP) {
                return <>
                    <CardHeaderGreen close={CloseCard}>
                        <div className='text-[#008938] font-bold text-[24px] '>ยืนยัน OTP</div>
                        <div className='text-[14px] font-[500]'>กรุณากรอกรหัสยืนยัน 6 หลัก ที่ได้รับทาง SMS
                            หมายเลขโทรศัพท์ {Phoneno}</div>
                        <div className='flex justify-center items-center p-3'>
                            <OtpInput
                                containerStyle=""
                                inputStyle={{
                                    border: '1px solid #DFE0E7',
                                    fontSize: '32px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'black',
                                    width: "40px"
                                }}
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                shouldAutoFocus
                                renderSeparator={<span className='mx-1'></span>}
                                renderInput={(props) => <input {...props} />}
                            />
                        </div>
                        <div className='text-[#A3A6B7] flex justify-center items-center flex-col gap-[10px] text-[14px]'>
                            <div>อ้างอิง {OTPRef}</div>
                            <div>รหัสยืนยันตัวตนจะหมดอายุใน {OTPTime}</div>
                            <ButtonWhiteBorderGray>
                                <div className='text-[#A3A6B7] w flex justify-start items-center p-3 rounded-[100px] text-sm bt-custom'>
                                    <span>ต้องการรหัสใหม่</span>
                                </div>
                            </ButtonWhiteBorderGray>
                            <ButtonCustom btnText={"ยืนยัน"} img='' type={"primary"} whenClick={Login} />
                        </div>
                    </CardHeaderGreen>
                </>
            } else {
                return (<CardHeaderGreen close={CloseCard}>
                    <h2 className="text-2xl font-bold text-[#008938]">ลงชื่อเข้าใช้</h2>
                    <p className="text-[#2C2C30] text-[14px]">กรอกหมายเลขโทรศัพท์ของคุณเพื่อเริ่มใช้งาน</p>
                    <div className={`flex h-[50px] justify-center items-center my-5 text-[#DFE0E7] w-full border border-1 rounded-3xl relative p-1 text-lg`} >
                        <div className='flex justify-start items-center w-24 p-3 rounded-[100px] text-xl bt-custom'>66+ |</div>
                        <input value={PhoneOTPValue} onChange={(e) => setPhoneOTPValue(e.target.value)} className={`h-full w-full outline-none text-black`} placeholder='123-456-789' />
                    </div>
                    <ButtonCustom type={'primary'} width='100%' img='' btnText={"เข้าสู่ระบบ"} isDisabled={false} whenClick={() => setIsConfirmOTP(true)} />
                    <div className={`flex h-[32px] w-full justify-center items-center my-5 rounded-3xl relative p-1 text-lg`} >
                        <ButtonWhiteBorderGray>
                            <div className='text-[#008938] w flex justify-start items-center p-3 rounded-[100px] text-sm bt-custom'>เข้าใช้โดยไม่เป็นสมาชิก</div>
                        </ButtonWhiteBorderGray>
                    </div>
                </CardHeaderGreen>
                )
            }

        }
    }

    return (
        <div >
            {isLoading && <Loading />}
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
                <FlowLogin />
                <CardLoginSuccess/>
            </div>
        </div>
    );
}



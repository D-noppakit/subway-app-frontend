import { useEffect, useState } from "react";
import CardHeaderGreen from "../Card/CardHeaderGreen";
import ButtonCustom from '../Button/ButtonCustom'
import ButtonWhiteBorderGray from '../Button/ButtonWhiteBorderGray';
import OtpInput from 'react-otp-input';
import store from "@/lib/store"
function calculateTimeRemaining(timestamp) {
    const now = new Date().getTime();
    const total = timestamp - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
        total,
        minutes,
        seconds,
    };
}
const FlowLogin = ({ setLoading, setIsCard, setIsConfirmOTP, isOpenCard, isConfirmOTP, CloseCard = {}, SetIsLogin }) => {
    const [PhoneOTPValue, setPhoneOTPValue] = useState("")
    const { PhoneNO, OnChangePhoneNo, UserInfo, SetUserInfo } = store();
    const [isDisabled, SetIsDisabled] = useState(false)
    const [otp, setOtp] = useState('');
    const [OTPRef, SetOTPRef] = useState('');
    const [OTPTime, SetOTPTime] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(null);
    
    useEffect(() => {
        if (OTPTime !== null) {
            const intervalId = setInterval(() => {
                const newTimeRemaining = calculateTimeRemaining(OTPTime);
                console.log({newTimeRemaining})
                setTimeRemaining(newTimeRemaining);

                if (newTimeRemaining.total <= 0) {
                    clearInterval(intervalId);
                }
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [OTPTime]);
    useEffect(() => {

        if (PhoneNO.length === 10) {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }
    }, [PhoneNO])
    useEffect(() => {
        console.log({ otp })
    }, [otp])

    const Login = () => {
        console.log("login")
        VerifyOTP()
        // setLoading(true)
        // setIsCard(false)

        // setTimeout(() => {
        //     setLoading(false)
        //     SetIsLogin(true)
        // }, 1000)
    }

    const GetOTP = () => {
        setLoading(true)
        if (PhoneNO.length === 10) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                "phoneno": PhoneNO
            });
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
            fetch("http://localhost:3003/api/v1/profile/subway/checkphone", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setLoading(false)
                    SetUserInfo({ ...result })
                    ReceivedOTP()

                })
                .catch((error) => SetUserInfo({ ...result }));
        } else {
            setIsConfirmOTP(false)
            console.log("phone no ไม่ถูกต้อง")
        }
    }
    const ReceivedOTP = () => {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "phoneno": PhoneNO
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch("http://localhost:3003/api/v1/profile/subway/sendotp", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log("ReceivedOTP", result)
                setLoading(false)
                if (result.RespMessage === "Success") {
                    SetUserInfo({ otp: result })
                    SetOTPRef(result.result.OtpKey)
                    SetOTPTime(result.result.unixTime)
                    setIsConfirmOTP(true)

                }
            })
            .catch((error) => console.log("error", error));
    }

    const VerifyOTP = () => {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "phoneno": PhoneNO,
            "unixTime": OTPTime,
            "newotp": otp
        });
        console.log(raw)
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch("http://localhost:3003/api/v1/profile/subway/verrifyotp", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log("VerifyOtp", result)
                if (result.RespMessage === "Success") {
                    SetUserInfo({ "VerifyOtp": result })
                    setIsCard(false)
                    setLoading(false)
                    SetIsLogin(true)
                    
                }
            })
            .catch((error) => console.log("error", error));
    }
    if (isOpenCard) {
        if (isConfirmOTP) {
            return <>
                <CardHeaderGreen close={CloseCard}>
                    <div className='text-[#008938] font-bold text-[24px] '>ยืนยัน OTP</div>
                    <div className='text-[14px] font-[500]'>กรุณากรอกรหัสยืนยัน 6 หลัก ที่ได้รับทาง SMS
                        หมายเลขโทรศัพท์ {PhoneNO}</div>
                    <div className='flex justify-center items-center p-3'>
                        <OtpInput
                            inputStyle={{
                                border: '1px solid #DFE0E7',
                                fontSize: '32px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'black',
                                width: "40px",
                                outline: "none",
                                caretColor: "transparent"
                            }}
                            value={otp}
                            onChange={(value) => {
                                if (/^\d*$/.test(value)) {
                                    setOtp(value);
                                }
                            }}
                            numInputs={6}
                            shouldAutoFocus
                            renderSeparator={<span className='mx-1'></span>}
                            renderInput={(props) => <input pattern="[0-9]*"
                                inputMode="numeric" {...props} />}
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
                        <div className='h-[48px] w-full'>
                            <ButtonCustom btnText={"ยืนยัน"} img='' type={"primary"} whenClick={Login} />
                        </div>
                    </div>
                </CardHeaderGreen>
            </>
        } else {

            return (<CardHeaderGreen close={CloseCard}>
                <h2 className="text-2xl font-bold text-[#008938]">ลงชื่อเข้าใช้</h2>
                <p className="text-[#2C2C30] text-[14px]">กรอกหมายเลขโทรศัพท์ของคุณเพื่อเริ่มใช้งาน</p>
                <div className={`flex h-[50px] justify-center items-center my-5 text-[#DFE0E7] w-full border border-1 rounded-3xl relative p-1 text-lg`} >
                    <div className='flex justify-start items-center w-24 p-3 rounded-[100px] text-xl bt-custom'>66+ |</div>
                    <input value={PhoneNO} onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d{0,10}$/.test(value)) { // ตรวจสอบว่าเป็นตัวเลขไม่เกิน 10 ตัว
                            OnChangePhoneNo(value); // ถ้าถูกต้องให้ set ค่าเข้า state
                        }
                    }} className={`h-full w-full outline-none text-black`} placeholder='123-456-789' />
                </div>
                <div className='h-[48px] w-full'>
                    <ButtonCustom type={'primary'} width='100%' img='' btnText={"เข้าสู่ระบบ"} isDisabled={isDisabled} whenClick={GetOTP} />
                </div>
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
export default FlowLogin
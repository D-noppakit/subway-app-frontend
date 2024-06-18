import { useEffect, useState } from "react";
import CardHeaderGreen from "../Card/CardHeaderGreen";
import ButtonCustom from '../Button/ButtonCustom'
import ButtonWhiteBorderGray from '../Button/ButtonWhiteBorderGray';
import store from "@/lib/store"
import CardOTP from "../Card/CardOTP";


const FlowLogin = ({ setLoading, setIsCard, setIsConfirmOTP, isOpenCard, isConfirmOTP, CloseCard = {}, SetIsLogin }) => {
    const [PhoneOTPValue, setPhoneOTPValue] = useState("")
    const { PhoneNO, OnChangePhoneNo, UserInfo, SetUserInfo, setIsLoginApp } = store();
    const [isDisabled, SetIsDisabled] = useState(false)
    const [otp, setOtp] = useState('');
    const [OTPRef, SetOTPRef] = useState('');
    const [OTPTime, SetOTPTime] = useState(null);
    useEffect(() => {
        if (PhoneNO.length === 10) {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }
    }, [PhoneNO])
    const Login = () => {
        VerifyOTP()
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
                    SetUserInfo(result.result)
                    setIsCard(false)
                    setLoading(false)
                    SetIsLogin(true)
                    setIsLoginApp(true)
                }
            })
            .catch((error) => console.log("error", error));
    }
    if (isOpenCard) {
        if (isConfirmOTP) {
            return <CardOTP setOtp={setOtp} otp={otp} Click={Login} OTPTime={OTPTime} OTPRef={OTPRef} PhoneNO={PhoneNO} CloseCard={CloseCard} />
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
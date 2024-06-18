import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import CardHeaderGreen from './CardHeaderGreen';
import ButtonCustom from '../Button/ButtonCustom'
import ButtonWhiteBorderGray from '../Button/ButtonWhiteBorderGray';
const formatTime = (millis) => {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default function CardOTP({ Click, setOtp, otp, CloseCard, PhoneNO, OTPRef, wrongOTP = false }) {
    const [timeLeft, setTimeLeft] = useState(180000);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1000);
            // console.log({ "timeLeft" : formatTime(timeLeft) })
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);


    return (

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
                        caretColor: "transparent",
                        borderColor: wrongOTP ? "#D83A3A" : ""
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
                {wrongOTP ? <div className='text-[12px] text-[#D83A3A]'>รหัส OTP ไม่ถูกต้อง ลองใหม่อีกครั้ง</div> : <></> }
                <div>อ้างอิง {OTPRef}</div>
                <div>รหัสยืนยันตัวตนจะหมดอายุใน {formatTime(timeLeft)}</div>
                <ButtonWhiteBorderGray>
                    <div className='text-[#A3A6B7] w flex justify-start items-center p-3 rounded-[100px] text-sm bt-custom'>
                        <span>ต้องการรหัสใหม่</span>
                    </div>
                </ButtonWhiteBorderGray>
                <div className='h-[48px] w-full'>
                    <ButtonCustom btnText={"ยืนยัน"} img='' type={"primary"} whenClick={Click} />
                </div>
            </div>
        </CardHeaderGreen>
    )
}

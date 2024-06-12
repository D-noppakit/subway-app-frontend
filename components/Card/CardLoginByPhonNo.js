import Image from 'next/image'
import React from 'react'
import ImagCardJHeader from "@/public/imgs/cardheader.png"
import LogoWhite from "@/public/logo/logo-small-white.png"
import IconClose from "@/public/icon/close-white.png"
import ButtonCustom from '../Button/ButtonCustom'
export default function CardLoginByPhonNo({ close = () => console.log("ส่ง function ปิดมา") }) {
    return (
        <div className="absolute z-100 top-0  bg-[#F8F9FB] bg-opacity-80 w-full h-full">
            <div className=" rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg w-[90%] h-[360px]">
                <div className='h-[70px]rounded-t-3xl relative  '>
                    <Image src={ImagCardJHeader} alt='headerTile' style={{ objectFit: "contain", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }} />
                    <div className='absolute top-4 left-4' >
                        <Image src={LogoWhite} alt='logo' width={35} height={43} style={{ objectFit: "contain" }} />
                    </div>
                    <div className='absolute top-7 right-5' onClick={() => close(true)} >
                        <Image src={IconClose} alt='logo' width={20} height={20} style={{ objectFit: "contain" }} />
                    </div>
                </div>
                <div className='p-[20px] gap-[24px]'>
                    <h2 className="text-2xl font-bold text-[#008938]">ลงชื่อเข้าใช้</h2>
                    <p className="text-[#2C2C30] text-[14px]">กรอกหมายเลขโทรศัพท์ของคุณเพื่อเริ่มใช้งาน</p>
                    <PhoneNoInputComponent />
                    <ButtonCustom type={'primary'} width='100%' img='' btnText={"เข้าสู่ระบบ"} isDisabled={true} />
                </div>

            </div>
        </div>
    )
}

function PhoneNoInputComponent() {
    return (<div className={`flex justify-center items-center text-white w-full`} >
        <button className={`flex justify-center items-center w-full p-3 rounded-[100px] text-xl bt-custom `} >
   
          hello
        </button>
    </div>)
}

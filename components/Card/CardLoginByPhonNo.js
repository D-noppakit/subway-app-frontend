'use client'
import Image from 'next/image'
import React, { useCallback } from 'react';
import ImagCardJHeader from "@/public/imgs/cardheader.png"
import LogoWhite from "@/public/logo/logo-small-white.png"
import IconClose from "@/public/icon/close-white.png"
import ButtonCustom from '../Button/ButtonCustom'
import UseCardLoginByPhonNoStore from '@/lib/CardLoginByPhonNoStore';

export default function CardLoginByPhonNo({ close = () => console.log("ส่ง function ปิดมา") }) {
    const { OnChangeValue, inputValue } = UseCardLoginByPhonNoStore()
    // const  
    // console.log("CardLoginByPhonNo.inputValue", CardLoginByPhonNo.inputValue)
    const PhoneNoInputComponent = React.memo(() => (
        <div className={`flex h-[50px] justify-center items-center my-5 text-[#DFE0E7] w-full border border-1 rounded-3xl relative p-1 text-lg`} >
            <div className='flex justify-start  items-center w-24 p-3 rounded-[100px] text-xl bt-custom'>66+ |</div>
            <input className={`h-full w-full outline-none text-black`} onChange={OnChangeValue} value={inputValue} placeholder='123-456-789' />
        </div>
    ));

    function NoneMember() {
        return (
            <div className={` flex h-[32px] w-full  justify-center items-center my-5 rounded-3xl relative p-1 text-lg`} >
                <div className={` flex h-[32px] justify-center items-center w-[120px]] border border-1 rounded-3xl relative p-1 text-lg`}>
                    <div className='text-[#008938] w flex justify-start   items-center p-3 rounded-[100px] text-sm bt-custom'>เข้าใช้โดยไม่เป็นสมาชิก</div>
                </div>
            </div>
        )
    }

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

                    <NoneMember />

                </div>

            </div>
        </div>
    )
}



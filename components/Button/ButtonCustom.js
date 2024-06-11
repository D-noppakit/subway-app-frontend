"use client"
import Image from 'next/image'
import React from 'react'

export default function ButtonCustom({ whenClick = () => console.log("ButtonCustom"), btnText, width = "60%",type }) {
    return (
        <div className={`flex justify-center items-center text-white w-[${width}]`} >
            <button className={`flex justify-center items-center w-[${width}] p-3 bg-[#F2B700] rounded-[100px] text-xl bt-custom` +type} onClick={whenClick} >
                <Image src={"/imgs/CartGreen.png"} width={20} height={10}
                    alt="Picture of the author" />
                <div className='w-[5px]'></div>
                {btnText}
            </button>
        </div>
    )
}

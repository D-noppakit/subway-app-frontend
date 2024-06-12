"use client"
import Image from 'next/image'
import React from 'react'

import useStore from '@/lib/store'

export default function ButtonCustom({ whenClick = () => console.log("ButtonCustom"), btnText, width = "60%",type, isDisabled  = false, img= '/imgs/CartGreen.png'}) {
    const {color} = useStore()
    let setcolor = {
        bg:"",
        text: ""
    }
    if(type == "primary"){
        setcolor.bg = 'green400'
        setcolor.text = 'neutral50'
    }else if(type == "secondary"){
        setcolor.bg = 'yellow400'
        setcolor.text = 'neutral50'
    }

    if(isDisabled){
        console.log("isDisabled",isDisabled)
        setcolor.bg = 'neutral500'
        setcolor.text = 'neutral50'
    }
    return (
        <div className={`flex justify-center items-center text-white w-[${width}]`} >
            <button className={`flex justify-center items-center w-[${width}] p-3 rounded-[100px] text-xl bt-custom ${type}`} onClick={whenClick} disabled = {isDisabled ? true: null}>
                {img && <Image src={img} width={20} height={10}
                    alt="Picture of the author" />}
                
                <div className='w-[5px]'></div>
                {btnText}
            </button>
        </div>
    )
}

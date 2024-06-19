"use client"
import Image from 'next/image'
import React from 'react'

import useStore from '@/lib/store'

export default function ButtonCustom({
    textSize = "20px",
    FontWeight = 500,
    whenClick = () => console.log("ButtonCustom"),
    btnText, width = "60%",
    type, isDisabled = false,
    img = '/imgs/CartGreen.png',
    children,
    useBoxOnly = false,
    LinkTo = ""
}) {

    const { color } = useStore()
    let setcolor = {
        bg: "",
        text: ""
    }
    if (type == "primary") {
        setcolor.bg = 'green400'
        setcolor.text = 'neutral50'
    } else if (type == "secondary") {
        setcolor.bg = 'yellow400'
        setcolor.text = 'neutral50'
    }

    if (isDisabled) {
        type = "disabled"
        setcolor.bg = 'neutral500'
        setcolor.text = 'neutral50'
    }
    return (
        <div className={`flex justify-center items-center text-white w-full h-full`} >
            {useBoxOnly ? <>{children}</> :
                <button className={`flex justify-center items-center w-full h-full p-2 rounded-[100px] text-xl bt-custom ${type}`} onClick={whenClick} disabled={isDisabled ? true : false}>
                    {img && <Image src={img} width={20} height={10}
                        alt="Picture of the author" />}
                    <div className='w-[5px]'></div>
                    <div className={`text-[${textSize}] font[${FontWeight}]`}>{btnText}</div>

                </button>}

        </div>
    )
}

"use client"
import Image from 'next/image'
import React from 'react'

import useStore from '@/lib/store'

export default function ButtonCustom({
    textSize = "20px", textSize2 = textSize,
    FontWeight = 500, FontWeight2 = FontWeight,
    whenClick = () => console.log("ButtonCustom"),
    btnText, btnText2, width = "60%",
    type, isDisabled = false,
    img = '/imgs/CartGreen.png',
    children,
    useBoxOnly = false,
    checkout = false,
    LinkTo = "",
    padding,
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

    if (type == "checkout") {
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
                <button className={`flex justify-center items-center w-full h-full p-2 rounded-[100px] text-xl bt-custom ${type} ${checkout ? 'checkout' : ''} ${padding ? ` px-[${padding}]`: ''}`} onClick={whenClick} disabled={isDisabled ? true : false}>
                    <div className='flex'>
                        {img && <Image src={img} width={20} height={10}
                         className='object-contain'
                            alt="Picture of the author" />}
                        <div className='w-[5px]'></div>
                        <div className={`text-[${textSize}] font-[${FontWeight}]`}>{btnText}</div>
                    </div>

                    {
                        btnText2 ? 
                        <>
                            <div className={`text-[${textSize2}] font-[${FontWeight2}]`}>{btnText2}</div>
                        </> : null
                    }


                </button>}

        </div>
    )
}

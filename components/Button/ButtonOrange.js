"use client"
import React from 'react'

export default function ButtonOrange({ whenClick , btnText }) {
    return (
        <button className='w-[90%] p-3 bg-[#F2B700] rounded-[100px]' onClick={() => whenClick()} >{btnText}</button>
    )
}

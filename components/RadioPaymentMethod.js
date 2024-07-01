import React from 'react'
import "@/app/css/custom-checkbox-and-radio-checkout.css"
import Image from "next/image";
export default function RadioPaymentMethod({ image_path = '', method_name = '', input_group = '', setMethod }) {
    return (
        <div className="bg-[#F6F6F6] rounded-[20px] h-[40px] w-full flex items-center justify-between px-[10px]">
            <div className="flex items-center text-[#0C8A44] text-[12px]">
                <Image src={image_path} alt={method_name + '_icon'} className="w-[24px] h-[24px] mr-[15px]" width={100} height={100} />
                <span>{method_name}</span>
            </div>
            <div className="flex items-center">
                <label className="container-radio">
                    <input onChange={setMethod} type="radio" name={input_group}></input>
                    <span className="checkmark-radio"></span>
                </label>
            </div>
        </div>
    )
}


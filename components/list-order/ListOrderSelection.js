"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import RadioBoxCustom from "../RadioBoxCustom"
import store from "@/lib/store"

export default function ListOrderSelection({ id = 1, data, title, num }) {
    const { DataOrderListConfirm, SetDataOrderListConfirmTypeRadio } = store();
    const [selectedOption, setSelectedOption] = useState(id);
    const [isArrowTop, setIsArrowTop] = useState(false)
    const [deg, setDeg] = useState("90deg")

    useEffect(() => {
        if (isArrowTop) {
            setDeg("270deg")
        } else {
            setDeg("90deg")
        }
    }, [isArrowTop])
    const switch1 = () => {
        console.log("click switch1")
        setIsArrowTop(!isArrowTop)
    }

    const handleSetValue = (value) => {
        console.log("Setting value:", value);
        SetDataOrderListConfirmTypeRadio(value);
    };

    return (
        <div >
            <div className='bg-white flex flex-col justify-between items-center rounded-2xl p-3 relative mt-3'>
                <div className="flex w-full" onClick={switch1}>
                    <div className='me-2 rounded-full bg-[#0C8A44] h-[32px] w-[40px] flex items-center justify-center font-[700] text-[#F3B817]'>
                        {num}
                    </div>
                    <div className='w-full '>
                        <div className='text-[#0C8A44]'>title</div>
                        <div className='text-[12px] font-[400] text-[#72747D]'>กรุณาเลือก 1 รายการ</div>
                    </div>
                    <div className={`px-2 ${isArrowTop ? "rotate-[270deg]" : "rotate-[90deg]"}  flex justify-center items-center`}>
                        <Image src={`/imgs/arrow-green.png`} width={14} height={14} alt="arrow" />
                    </div>
                </div>
                {data.map((v) => {
                    if (!isArrowTop) {
                        return (
                            <div key={v.id} className="flex flex-row w-full gap-2 pt-3">
                                <div className="flex items-center w-full">
                                    <div className="h-[65px] w-[65px] flex justify-center items-center me-2 rounded-lg ">
                                        <Image alt="foot" className="rounded-lg " src={"/imgs/demo/img1.webp"} height={64} width={64}></Image>
                                    </div>
                                    <div>
                                        <div className="text-black">ใส่ชีสแผ่น (เชดด้า ชีส)</div>
                                        {/* <div>des</div> */}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <RadioBoxCustom arrow={v.id} group={v.group} id={v.id} key={v.id} setValue={handleSetValue} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                                </div>
                            </div>
                        )
                    }

                })}

            </div>
        </div>

    )
}

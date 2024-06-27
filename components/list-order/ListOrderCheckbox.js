"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import store from "@/lib/store"
import CheckBoxCustom from "../CheckBoxCustom"

export default function ListOrderCheckbox({ id = 1, data, title, num, max, min }) {
    const count = max - min + 1
    const { DataOrderListConfirm, SetDataOrderListConfirmTypeRadio } = store();
    const [checkedItems, setCheckedItems] = useState([]);
    const [isArrowTop, setIsArrowTop] = useState(false)
    const [deg, setDeg] = useState("90deg")
    const [ListCheckBox, setListCheckBox] = useState([])
    useEffect(() => {
        const CheckBoxData = data.map((item) => ({ ...item, check: false }))
        setCheckedItems(CheckBoxData)
    }, [])
    useEffect(() => {
        console.log(ListCheckBox)
    }, [ListCheckBox])
    useEffect(() => {
        console.log({ data })
        console.log({ checkedItems })
    }, [checkedItems])
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
    const listCanGet = () => {
        if (count === 1) {
            return "กรุณาเลือก 1 รายการ"
        } else if (count > 1) {

            return `กรุณาเลือก ${min}-${max} รายการ`
        } else {
            return "กรุณาเลือก 1 รายการ"
        }
    }

    const AddListOrderCheckBox = (is, data) => {
        console.log({ is })
        console.log({ data })
        if (ListCheckBox.length === max) {
            if (checkedItems) {
                const setTrue = checkedItems.map((item) => ({ ...item, disabled: true }))
                setCheckedItems(setTrue)
                return
            }
        }
        if (is) {
            const check = ListCheckBox.some((v) => v.subitemcode === data.subitemcode)
            console.log({ check: !check })
            if (!check) { // ถ้าไม่มี ในarry ให้ append
                setListCheckBox([...ListCheckBox, data])
            }
        } else { // ถ้า checkbox เป็น false ให้ลบ
            console.log("AddListOrderCheckBox else")
            const remove = ListCheckBox.filter((v) => v !== data)
            console.log({ remove })
            setListCheckBox(remove)
        }
        console.log({ ListCheckBox })

    }

    return (
        <div >
            <div className='bg-white flex flex-col justify-between items-center rounded-2xl p-3 relative mt-3'>
                <div className="flex w-full" onClick={switch1}>
                    <div className='me-2 rounded-full bg-[#0C8A44] h-[32px] w-[40px] flex items-center justify-center font-[700] text-[#F3B817]'>
                        {num}
                    </div>
                    <div className='w-full '>
                        <div className='text-[#0C8A44]'>{title}</div>
                        <div className='text-[12px] font-[400] text-[#72747D]'>{listCanGet()}</div>
                    </div>
                    <div className={`px-2 ${isArrowTop ? "rotate-[270deg]" : "rotate-[90deg]"}  flex justify-center items-center`}>
                        <Image src={`/imgs/arrow-green.png`} width={14} height={14} alt="arrow" />
                    </div>
                </div>
                {checkedItems.map((item, index) => {
                    if (!isArrowTop) {
                        return (
                            <div key={index} className="flex flex-row w-full gap-2 pt-3">
                                <div className="flex items-center w-full">
                                    <div className="h-[65px] w-[65px] flex justify-center items-center me-2 rounded-lg ">
                                        <Image alt="foot" className="rounded-lg " src={"/imgs/demo/img1.webp"} height={64} width={64}></Image>
                                    </div>
                                    <div>
                                        <div className="text-black">{item.th_name}</div>
                                        {/* <div>des</div> */}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center relative w-10">
                                    <CheckBoxCustom
                                        key={index}
                                        item={item}
                                        isChecked={item.checked}
                                        onCheckboxChange={(isChecked) => handleCheckboxChange(index, isChecked)}
                                        text={item.value}
                                        disabled={item.disabled}
                                        max={max}
                                        AddListOrderCheckBox={(is) => AddListOrderCheckBox(is, item)}
                                    />
                                </div>
                            </div>
                        )
                    }
                })}

            </div>
        </div>

    )
}

"use client"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import store from "@/lib/store"
import CheckBoxCustom from "../CheckBoxCustom"
export default function ListOrderCheckbox({ id = 1, data, title, num, max, min, groupid, SetIsOpenActiveAddCard }) {
    const count = max - min + 1
    const { SetDataOrderListConfirmTypeCheck } = store();
    const [checkedItems, setCheckedItems] = useState(data.map(item => ({ ...item, check: false })));
    const [isArrowTop, setIsArrowTop] = useState(false)
    const [deg, setDeg] = useState("90deg")
    const [ListCheckBox, setListCheckBox] = useState([])


    useEffect(() => {
        console.log({ ListCheckBox })
        console.log({ checkedItems })

        console.log("groupid set :", groupid)
        SetDataOrderListConfirmTypeCheck({ data: ListCheckBox, type: "checkbox", "groupid": groupid })

    }, [ListCheckBox, checkedItems])

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
        if (is && ListCheckBox.length >= max) {
            return; // หยุดการทำงานถ้าจำนวน checkbox ที่เลือกถึงจำนวนสูงสุดแล้ว
        }

        data.check = is;
        if (is) {
            setListCheckBox(prevList => {
                const check = prevList.some(v => v.subitemcode === data.subitemcode);
                if (!check) {
                    return [...prevList, data];
                }
                return prevList;
            });
        } else {
            setListCheckBox(prevList => prevList.filter(v => v.subitemcode !== data.subitemcode));

        }

        setCheckedItems(prevItems => prevItems.map(item => item.subitemcode === data.subitemcode ? { ...item, check: is } : item));
        // SetDataOrderListConfirmTypeCheck({ data: ListCheckBox, type: "checkbox", "groupid": groupid })
    };


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
                    // console.log(item)
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
                                        isChecked={item.check}
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

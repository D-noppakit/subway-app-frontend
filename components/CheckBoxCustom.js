"use client"
import React, { useState } from 'react'

export default function CheckBoxCustom({ disabled, item, AddListOrderCheckBox, isChecked }) {
    // const [checked, setChecked] = useState(isChecked)
    const handleCheckboxChange = (event) => {
        const value = event.target.checked;
        AddListOrderCheckBox(value)
        // setChecked(value)
    };
    let themeClass = ""
    if (disabled) {
        themeClass = "container-checkbox flex justify-center items-center disabled"
    } else {
        themeClass = "container-checkbox flex justify-center items-center"
    }
    // console.log("addon",item.addon)
    return (
        <>
            {item.addon && <div className='absolute left-[-50px] top-[6px] text-[#72747D] text-[12px] font-[400]'>+{item.price}฿</div>}
            <label onClick={() => console.log(item)} className={themeClass} >
                <input className='hidden' type="checkbox" disabled={disabled} checked={isChecked} onChange={handleCheckboxChange} />
                <span className="checkmark-checkbox"></span>
            </label>
        </>
    );
}

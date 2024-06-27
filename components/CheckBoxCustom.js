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

    return (
        <>
            <label onClick={() => console.log(item)} className={themeClass} >
                <input className='hidden' type="checkbox" disabled={disabled} checked={isChecked} onChange={handleCheckboxChange} />
                <span className="checkmark-checkbox"></span>
            </label>
        </>
    );
}

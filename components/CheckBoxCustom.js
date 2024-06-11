"use client"
import React, { useState } from 'react'

export default function CheckBoxCustom({ text, isChecked, onCheckboxChange, disabled, id }) {
    // console.log({ item })
    const handleCheckboxChange = (event) => {
        const value = event.target.checked;
        onCheckboxChange(value, id)
    };
    let themeClass = ""
    if (disabled) {
        themeClass = "container-checkbox flex justify-center items-center disabled"
    } else {
        themeClass = "container-checkbox flex justify-center items-center"
    }

    return (
        <>
            <label className={themeClass} >{text}
                <input type="checkbox" disabled={disabled} checked={isChecked} onChange={handleCheckboxChange} />
                <span className="checkmark-checkbox"></span>
            </label>
        </>
    );
}

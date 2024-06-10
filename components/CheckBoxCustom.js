import React, { useState } from 'react'

export default function CheckBoxCustom({ text, isChecked, onCheckboxChange, disabled = true }) {

    const handleCheckboxChange = (event) => {
        const value = event.target.checked;
        onCheckboxChange(value);
    };
    let themeClass = ""
    if (disabled) {
        themeClass = "container-checkbox flex justify-center items-center disable"
    } else {
        themeClass = "container-checkbox flex justify-center items-center "
    }

    return (
        <>
            <label className={themeClass} htmlFor="checkbox1">{text}
                <input type="checkbox" id="checkbox1" disabled={disabled} checked={isChecked} onChange={handleCheckboxChange} />
                <span className="checkmark-checkbox"></span>
            </label>
        </>
    );
}

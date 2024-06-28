'use client'
import "@/app/css/custom-checkbox-and-radio.css"
import React, { useState } from 'react';

const RadioBoxCustom = ({ data, value = "1", group = "A", setValue, selectedOption, setSelectedOption, isArrowTop }) => {

    const handleRadioChange = (event) => {

        const value = event.target.value;
        // console.log("Setting selectedOption:", value);
        setSelectedOption(value);
        setValue({ value, groupid: group, type: 'radio', data });
    };
    // console.log({value , selectedOption})
    if (!isArrowTop) {
        return (
            <div className="flex justify-center items-center">
                <label className="container-radio">
                    <input
                        type="radio"
                        value={value.toString()}
                        onChange={handleRadioChange}
                        name={`group-${group}`}
                    />
                    <span className="checkmark-radio"></span>
                </label>
            </div>
        );
    }


};

export default RadioBoxCustom;


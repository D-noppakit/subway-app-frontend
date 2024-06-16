'use client'
import "@/app/css/custom-checkbox-and-radio.css"
import React, { useState } from 'react';

const RadioBoxCustom = ({ id = "1", group = "A", setValue, selectedOption, setSelectedOption, isArrowTop }) => {

    const handleRadioChange = (event) => {

        const value = event.target.value;
        // console.log("Setting selectedOption:", value);
        setSelectedOption(value);
        setValue({ id, group, type: 'radio' });
    };
    // console.log({id , selectedOption})
    if (!isArrowTop) {
        return (
            <div className="flex justify-center items-center">
                <label className="container-radio">
                    <input
                        type="radio"
                        value={id.toString()}
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


'use client'
import React, { useState } from 'react';

export default function RadioBoxCustom() {
    const [selectedOption, setSelectedOption] = useState('One');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h1>Custom Radio Buttons</h1>
            <label className="container-radio">One
                <input
                    type="radio"
                    value="One"
                    checked={selectedOption === 'One'}
                    onChange={handleRadioChange}
                    name="radio"
                />
                <span className="checkmark-radio"></span>
            </label>
            <label className="container-radio">Two
                <input
                    type="radio"
                    value="Two"
                    checked={selectedOption === 'Two'}
                    onChange={handleRadioChange}
                    name="radio"
                />
                <span className="checkmark-radio"></span>
            </label>
            <label className="container-radio">Three
                <input
                    type="radio"
                    value="Three"
                    checked={selectedOption === 'Three'}
                    onChange={handleRadioChange}
                    name="radio"
                />
                <span className="checkmark-radio"></span>
            </label>
            <label className="container-radio">Four
                <input
                    type="radio"
                    value="Four"
                    checked={selectedOption === 'Four'}
                    onChange={handleRadioChange}
                    name="radio"
                    disabled={true}
                />
                <span className="checkmark-radio"></span>
            </label>
        </div>
    );
}

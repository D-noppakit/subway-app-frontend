'use client'
import React, { useState } from 'react';
import SwitchComponent from '../Switch/Switch';

export default function DeliciousRecipe() {
    const [isSwitch , setIsSwitch] = useState(false)
    return (
        <div className='w-full bg-[#FFF4EA] rounded-2xl relative'>
            <div className='w-full flex justify-between items-center p-3 bg-[#FF8356] rounded-t-2xl'>
                <div className='flex'>
                    <div className='mr-2'>img</div>
                    <div>title</div>
                </div>
                <div>
                    <SwitchComponent />
                </div>
            </div>
            <div className='p-3'>This is where you can find the best recipes.</div>
            {/* Add more content or components here */}
        </div>
    );
}
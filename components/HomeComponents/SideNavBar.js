import React, { useState } from 'react';
import HeaderTwo from "@/components/HeaderTwo"
export default function SideNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" z-30">
            <div>
                {false && <HeaderTwo /> } 
            </div>

            <div
                className={`fixed top-0 left-0 h-full bg-red-300 transition-transform duration-300 ease-out ${isOpen ? 'w-full transform translate-x-0' : 'w-[-100px] transform -translate-x-full'}`}
            >
                <div className="p-4">
                    <h2 className="text-lg font-bold">Sliding Menu</h2>
                    <p>This menu slides in from the left when the burger icon is clicked.</p>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import HeaderTwo from "@/components/HeaderTwo"
export default function SideNavBar({ isOpen = false, Close = () => console.log("Close") }) {
    // const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        Close(!isOpen)
    }
    return (
        <div className="z-100 absolute">
            <div
                className={`fixed top-0 left-0 h-full bg-white transition-transform duration-300 ease-out ${isOpen ? 'w-full transform translate-x-0' : 'w-[-100px] transform -translate-x-full'}`}
            >
                <div className="p-4">
                    {isOpen && <HeaderTwo Close={handleClose} />}
                    <h2 className="text-lg font-bold">Sliding Menu</h2>
                    <p>This menu slides in from the left when the burger icon is clicked.</p>
                </div>
            </div>
        </div>
    );
}

"use client"
import Image from "next/image";
import CheckBoxCustom from "@/components/CheckBoxCustom";
import { useState } from "react";
import RadioBoxCustom from "@/components/RadioBoxCustom";
import HeaderOne from "@/components/HeaderOne";
import HeaderTwo from "@/components/HeaderTwo";
import HeaderTree from "@/components/HeaderTree"
import CardWelcomeCustomer from "@/components/CardWelcomeCustomer";

export default function HowToUse() {
    // Mock data for checkboxes
    const CheckBoxData = [{ id: 1, value: "แซนวิช", checked: false }, { id: 2, value: "แซนวิช2", checked: false }, { id: 3, value: "แซนวิช3", checked: false }];
    const [checkedItems, setCheckedItems] = useState(CheckBoxData);
    const handleCheckboxChange = (id, isChecked) => {
        setCheckedItems(prevState =>
            prevState.map(item =>
                item.id === id ? { ...item, checked: isChecked } : item
            )
        );

    };

    return (
        <div>

            <CheckBoxCustom
                key={1}
                onCheckboxChange={()=>{console.log("hello")}}
                text={"hello"}
            />

        </div>
    );
}

function submit() {
    console.log("ลงชื่อเข้าใช้")
}

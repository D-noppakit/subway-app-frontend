"use client"
import Image from "next/image";
import TextboxSubway from "@/components/subwaytextbox"
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
        // console.log({ id })
        setCheckedItems(prevState =>
            prevState.map(item =>
                item.id === id ? { ...item, checked: isChecked } : item
            )
        );

    };
    // console.log({ checkedItems })

    return (
        <>
            {checkedItems.map((item) => (
                <CheckBoxCustom
                    key={item.id}
                    item={item}
                    isChecked={item.checked}
                    onCheckboxChange={(isChecked) => handleCheckboxChange(item.id, isChecked)}
                    text={item.value}
                />
            ))}
            <RadioBoxCustom />
            <HeaderOne debug={true} CartCount={10} />
            <HeaderTwo debug={true}  CartCount={10} />
            <HeaderTree debug={true}  CartCount={10} />
            <CardWelcomeCustomer text1={"ลงชื่อเข้าใช้"} text2={"ปลดล็อคสิทธิประโยชน์อีกเพียบ ด้วยสมาชิก ซับเวย์ รีวอร์ด"} btnText={'ลงชื่อเข้าใช้ / สมัครสมาชิก'} whenClick={submit} type={2} />
        </>
    );
}

function submit(){
    console.log("ลงชื่อเข้าใช้")
}

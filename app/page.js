"use client"
import Image from "next/image";
import TextboxSubway from "@/components/subwaytextbox"
import CheckBoxCustom from "@/components/CheckBoxCustom";
import { useState } from "react";



export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
  };
  return (
    <>
      <TextboxSubway type="defaul" />
      <CheckBoxCustom isChecked={isChecked} onCheckboxChange={handleCheckboxChange} text={"check box"} />
    </>
  );
}


"use client"
import Image from "next/image";
import HeaderOne from "@/components/HeaderOne";
import SelectionTopHome from "@/components/SelectionTopHome";
import SectionBottom from "@/components/HomeComponents/SectionBottom";
import Head from "next/head";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import { useState } from "react";
import CardSquare from "@/components/Card/CardSquare"

export default function Home() {
  let listData = [
    { id: "1", value: "us" },
    { id: "2", value: "en" }
  ]
  const [isOpenBulgur, setIsOpenBulgur] = useState(false)
  const ClickBulgur = (state) => {
    setIsOpenBulgur(state)
  }
  return (
    <div className="relative">
      <HeaderOne CartCount={10} whenClickBulgur={ClickBulgur} />
      <SelectionTopHome />
      {/* <Selectbox type="success" listData={listData}/> */}
      <SectionBottom />
      <div className="w-screen p-5">
        <CardSquare />
      </div>

      {/* bulgur when click */}
      <div className={"absolute top-0 z-50"}>
        <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
      </div>

    </div>
  );
}


"use client"
import Image from "next/image";
import ButtonCustom from "@/components/Button/ButtonCustom"
import HeaderOne from "@/components/HeaderOne";
import SelectionTopHome from "@/components/SelectionTopHome";
import SectionBottom from "@/components/HomeComponents/SectionBottom";
import Head from "next/head";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import { useState } from "react";
import CardSquare from "@/components/Card/CardSquare"
import CardListItem from "@/components/Card/CardListItem";

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <HeaderOne CartCount={10} whenClickBulgur={ClickBulgur} />
      <SelectionTopHome />
      <div className="w-screen p-5">
          <CardSquare/>
      </div>
      <div className="w-screen p-5">
          <CardListItem/>
      </div>
      {/* <Selectbox type="success" listData={listData}/> */}
      <SectionBottom />
      
      {/* bulgur */}
      <div className={"absolute top-0 z-50"}>
        <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
        
      </div>

    </>
  );
}

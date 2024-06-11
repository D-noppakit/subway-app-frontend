
"use client"
import HeaderOne from "@/components/HeaderOne";
import SelectionTopHome from "@/components/SelectionTopHome";
import SectionBottom from "@/components/HomeComponents/SectionBottom";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import { useState } from "react";
import CardSquare from "@/components/Card/CardSquare"
import CardListItem from "@/components/Card/CardListItem";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


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
      <div className="w-screen p-5">
        <SectionBottom />
        <CardSquare />
        <CardListItem />
      </div>
      {/* bulgur when click */}
      <div className={"absolute top-0 z-50"}>
        <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
      </div>
    </div>
  );
}

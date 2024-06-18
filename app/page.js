
"use client"
import HeaderOne from "@/components/HeaderOne";
import SelectionTopHome from "@/components/SelectionTopHome";
import SectionBottom from "@/components/HomeComponents/SectionBottom";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import { useEffect, useState } from "react";
import CardSquare from "@/components/Card/CardSquare"
import CardListItem from "@/components/Card/CardListItem";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSquareSkel from "@/components/Skeleton/CardSquareSkel"
import HomeBanner from "@/components/HomeComponents/HomeBanner";
import BannerSkel from "@/components/Skeleton/BannerSkel"
import Loading from "@/components/Loading";
import useStore from '@/lib/store';
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import HeaderTwo from "@/components/HeaderTwo";
import HeaderTree from "@/components/HeaderTree";
const fetcher = (url) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ "shopcode": "S001" }),
}).then(res => res.json());
export default function page() {
  const { data, error, isLoading } = useSWR(
    'http://localhost:3003/api/v1/product/byshop/promotionhotdeal',
    fetcher
  );
  let listData = [
    { id: "1", value: "us" },
    { id: "2", value: "en" },
    { id: "3", value: "en" },
    { id: "4", value: "en" }
  ]
  const [isOpenBulgur, setIsOpenBulgur] = useState(false)
  const router = useRouter()
  const ClickBulgur = (state) => {
    console.log("ClickBulgur", state)
    setIsOpenBulgur(state)
  }
  return (
    <div className="">
      {/* {isLoading && <Loading />} */}
      <HeaderOne CartCount={0} whenClickBulgur={ClickBulgur} />
      <SelectionTopHome />
      <div className="w-screen p-5">
        <SectionBottom />
        <div className="grid grid-cols-2 gap-3 justify-self-center">
          {isLoading ? <RenderCardSquareSkel /> : listData.map(v => <CardSquare key={v.id} whenClick={() => router.push("/listmenu")} />)}
        </div>
        {isLoading ? <BannerSkel /> : <HomeBanner />}
        {/* <CardListItem /> */}
      </div>
      {/* bulgur when click */}
      <div className={"absolute top-0 z-50"}>
        <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
      </div>
    </div>
  );
}

function RenderCardSquareSkel() {
  return (
    <>
      <CardSquareSkel />
      <CardSquareSkel />
      <CardSquareSkel />
      <CardSquareSkel />
    </>
  )
}

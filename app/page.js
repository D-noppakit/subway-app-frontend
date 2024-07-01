
"use client"
import HeaderOne from "@/components/HeaderOne";
import SelectionTopHome from "@/components/SelectionTopHome";
import SectionBottom from "@/components/HomeComponents/SectionBottom";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import { useEffect, useState } from "react";
import CardSquare from "@/components/Card/CardSquare"
import 'react-loading-skeleton/dist/skeleton.css'
import CardSquareSkel from "@/components/Skeleton/CardSquareSkel"
import HomeBanner from "@/components/HomeComponents/HomeBanner";
import BannerSkel from "@/components/Skeleton/BannerSkel"
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import PickUpAt from "@/components/PickUpAt"
const fetcher = (url) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ "shopcode": "S001" }),
}).then(res => res.json());
export default function page() {
  const [isOpenModalLocation, setIsOpenModalLocation] = useState(false)
  const { data: dataPromohot, error: errorPromohot } = useSWR(
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
  if (dataPromohot) {
    console.log(dataPromohot)
  }
  return (
    <div className="">
      {/* {isLoading && <Loading />} */}
      {/* {errorPromohot ?
      <div className="w-screen h-screen opacity-40 bg-[--primary-subway-black] z-50" style={{position:'fixed'}}>
      </div>:null} */}
      <HeaderOne CartCount={1} whenClickBulgur={ClickBulgur} />
      <SelectionTopHome setIsOpenModalLocation={setIsOpenModalLocation} />
      <div className="w-screen p-5">
        {!dataPromohot ? <SectionBottom Loading={false} listData={[]} /> : <SectionBottom Loading={true} listData={dataPromohot.result.promo} />}
        <div className="grid grid-cols-2 gap-3 justify-self-center">
          {!dataPromohot ? <RenderCardSquareSkel /> : dataPromohot.result.hotdeal.map(v => <CardSquare key={v.itemcode} whenClick={() => router.push("/listmenu")} />)}
        </div>
        {!dataPromohot ? <BannerSkel /> : <HomeBanner />}
        {/* <CardListItem /> */}
      </div>
      {/* bulgur when click */}
      <div className={"absolute top-0 z-50"}>
        <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
      </div>
      {isOpenModalLocation && <PickUpAt setIsOpenModalLocation={setIsOpenModalLocation} />}
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

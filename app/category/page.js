
"use client"
import HeaderOne from "@/components/HeaderOne";
import SelectionTopHome from "@/components/SelectionTopHome";
import SectionBottom from "@/components/HomeComponents/SectionBottom";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSquareSkel from "@/components/Skeleton/CardSquareSkel"
import HomeBanner from "@/components/HomeComponents/HomeBanner";
import BannerSkel from "@/components/Skeleton/BannerSkel"
import LocationAt from "@/components/HomeComponents/LocationAt"
import Image from "next/image"
import CardLastOrder from "@/components/Card/CardLastOrder";
import TittleHeader from "@/components/HomeComponents/TittleHeader";
import CardCategory from "@/components/Card/CardCategory"
import Link from 'next/link'
import useSWR from 'swr';
import PickUpAt from "@/components/PickUpAt";
import { modalLocation } from "@/hooks/openModal";

const fetcher = (url) => fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "shopcode": "S001" }),
}).then(res => res.json());


export default function page() {
    const modal = modalLocation()
    let listData = [
        { id: "1", value: "us" },
        { id: "2", value: "en" },
        { id: "3", value: "en" },
        { id: "4", value: "en" }
    ]
    const [isOpenBulgur, setIsOpenBulgur] = useState(false)    
    const ClickBulgur = (state) => {
        setIsOpenBulgur(state)
    }

    const { data: dataCat } = useSWR(
        'http://localhost:3003/api/v1/product/byshop/getcat',
        fetcher
    );
    useEffect(() => {
        if (dataCat) {
            console.log("dataCat", dataCat)
            const newOptions = dataCat.result.map((e, index) => ({
                id: index,
                value: e.container_name_th
            }));

        }

    }, [dataCat]);



    return (
        <div className="">
            {modal.isOpenModalLocation && <PickUpAt setIsOpenModalLocation={modal.toggle}/>}
            <HeaderOne CartCount={0} whenClickBulgur={ClickBulgur} />
            <div style={{ height: "fit-content" }}>
                <main className={`w-full h-[139px] bg-[#0b8a45] relative`}>
                    <div className="relative ">
                        <LocationAt NameLocation={"Subway CW Tower"} Time={"ทันที"} whenClick={modal.toggle} />

                    </div>
                    <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute z-0 h-[200px] " style={{ objectFit: "contain", overflow: "hidden" }}>
                        <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" className="w-full" width={1000} height={139}/>
                    </div>

                </main>
            </div>
            <div style={{ padding: '16px', marginTop: "10px" }} className="flex flex-col">
                <CardLastOrder />
                <div className="flex w-full">
                    <div className="flex flex-col pt-5 w-full">
                        <TittleHeader textHeader="เลือกหมวดหมู่" img={''} />
                        <div className="grid grid-cols-2 gap-2 w-full">


                            {dataCat && dataCat.result.length > 0 ? dataCat.result.map((e, index) => (
                                <Link key={index} href={"/listmenu/" + index} className={'w-full'}>
                                    <CardCategory title={e.container_name_th} alt={'img' + index} img={e.img} />
                                </Link>
                            )

                            ) : null}
                        </div>
                    </div>

                </div>
            </div>
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

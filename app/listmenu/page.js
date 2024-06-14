
"use client"
import HeaderOne from "@/components/HeaderOne";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import { useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSquareSkel from "@/components/Skeleton/CardSquareSkel"
import LocationAt from "@/components/HomeComponents/LocationAt"
import Image from "next/image"
import Subwaytextbox from "@/components/Subwaytextbox";
import IconSearch from "@/public/icon/IconSearch.png"
import IconFavorite from "@/public/icon/IconFavorite.png"
export default function page() {

    let listData = [
        { id: "1", value: "us" },
        { id: "2", value: "en" },
        { id: "3", value: "en3" },
        { id: "4", value: "en4" }
    ]
    const [isOpenBulgur, setIsOpenBulgur] = useState(false)
    const ClickBulgur = (state) => {
        setIsOpenBulgur(state)
    }

    return (
        <div className="relative">
            <HeaderOne CartCount={0} whenClickBulgur={ClickBulgur} />
            <div style={{ height: "fit-content" }}>
                <main className={`w-full h-[139px] bg-[#0b8a45] relative`}>
                    <div className="relative ">
                        <LocationAt NameLocation={"Subway CW Tower"} Time={"ทันที"} whenClick={() => console.log('ทันที')} />

                    </div>
                    <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute z-0 h-[200px] " style={{ objectFit: "contain", overflow: "hidden" }}>
                        <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" className="w-full" width={400} height={139}
                        />
                    </div>

                </main>
            </div>
            <div className={'container-promotion flex'} >
                <TittleHeader textHeader="ซุป, เมนูทานเล่น และอื่นๆ"/>

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

"use client"
import CardSquare from "@/components/Card/CardSquare";
import HeaderOne from "@/components/HeaderOne";
import LocationAt from "@/components/HomeComponents/LocationAt";
import Image from "next/image";
import { useState } from "react";

export default function Home2() {
    const [isOpenBulgur, setIsOpenBulgur] = useState(false)
    const ClickBulgur = (state) => {
        setIsOpenBulgur(state)
    }
    const OPTIONAL_RECOMMEND_MENU = []
    for (let i = 0; i < 10; i++) {
        OPTIONAL_RECOMMEND_MENU.push(<CardSquare fullPrice={185} key={'orm_' + i}/>)
    }
    return (
        <div>
            <HeaderOne CartCount={0} whenClickBulgur={ClickBulgur} />
            <div style={{ height: "fit-content" }}>
                <main className={`w-full h-[139px] bg-[#0b8a45] relative`}>
                    <div className="relative ">
                        <LocationAt NameLocation={"Subway CW Tower"} Time={"ทันที"} whenClick={() => console.log('ทันที')} />

                    </div>
                    <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute z-0 h-[200px] " style={{ objectFit: "contain", overflow: "hidden" }}>
                        <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" className="w-full" width={1000} height={139}
                        />
                    </div>

                </main>
            </div>
            <div className="w-screen p-5">
                <div className="h-[385px]"></div>
            </div>
            <div className="h-[215px] pl-5 gap-[5px] flex flex-col">
                <span className="text-[#0C8A44] text-16px font-bold">สั่งเพิ่มรับรองว่าถูกใจ</span>
                <div className="flex h-[175px] gap-[12px] overflow-x-scroll w-[680px]">
                   {OPTIONAL_RECOMMEND_MENU}
                </div>
            </div>
        </div>
    );
}

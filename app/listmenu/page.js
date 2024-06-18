
"use client"
import HeaderOne from "@/components/HeaderOne";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSquareSkel from "@/components/Skeleton/CardSquareSkel"
import LocationAt from "@/components/HomeComponents/LocationAt"
import Image from "next/image"
import Subwaytextbox from "@/components/Subwaytextbox";
import IconSearch from "@/public/icon/IconSearch.png"
import IconFavorite from "@/public/icon/IconFavorite.png"
import TittleHeader from "@/components/HomeComponents/TittleHeader";
import CardSquare from "@/components/Card/CardSquare";
import { useRouter } from "next/navigation";
import CardListItem from "@/components/Card/CardListItem";
import store from "@/lib/store"

export default function page() {
    const { clearDataOrderListConfirm } = store();
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
        clearDataOrderListConfirm()
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            if (typeof document !== 'undefined') {
                const scrolledDown = document.body.scrollTop > 100;
                // console.log(`Scroll position: ${document.body.scrollTop}`);
                setIsScrolledDown(scrolledDown);
            }
        };

        document.body.addEventListener('scroll', handleScroll);
        // Initial check in case the user is already scrolled down
        handleScroll();

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const router = useRouter()
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
        <div className="">
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
            <div className={'container-bottom flex flex-col'}>
                <div className="container-searchbox flex justify-between pt-6 ps-[16px] pe-[16px] pb-2 " style={{ position: "-webkit-sticky", position: "sticky", top: "60px", backgroundColor: "white", zIndex: '2', boxShadow: isScrolledDown ? "0px -2px 25px 0px rgba(0,0,0,0.75)" : "" }}>
                    <div >
                        <Subwaytextbox />

                    </div>
                    <div className={'border rounded-full border-[--neutral400] w-[45px] h-[45px] flex justify-center items-center'}>
                        <Image src={IconSearch} alt="IconSearch" width={24} height={24} style={{ width: "24px", height: "24px", objectFit: "cover" }} />
                    </div>
                    <div className={'border rounded-full border-[--neutral400] w-[45px] h-[45px] flex justify-center items-center'}>
                        <Image src={IconFavorite} alt="IconFavorite" width={24} height={24} style={{ width: "24px", height: "24px", objectFit: "cover" }} />
                    </div>
                </div>
                <div className="ps-[16px] pe-[16px]">
                    <div className={'container-content-bottom flex flex-col pt-5'} >
                        <div>
                            <TittleHeader textHeader="โปรโมชั่น" />
                            <div className={'list-promotion pt-2 grid grid-cols-2 gap-2 w-full'}>
                                <CardSquare whenClick={() => router.push("/list-order/orderid")} />
                                <CardSquare />
                                <CardSquare />
                                <CardSquare />
                            </div>
                        </div>
                        <div>
                            <div className='contanier-box-item'>
                                <div className="box-item-title">
                                    <TittleHeader textHeader="อาหารเช้า (เช้าตรู่ - 11 โมงเท่านั้น)" />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                            </div>
                            <div className='contanier-box-item'>
                                <div className="box-item-title">
                                    <TittleHeader textHeader="เมนูมาใหม่ โดนใจกว่าเดิม" />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                                <div className="box-item-list">
                                    <CardListItem />
                                </div>
                            </div>
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

"use client"

import DeliciousRecipe from "@/components/list-order/DeliciousRecipe";
import ListOrderHeader from "@/components/list-order/ListOrderHeader";
import ListOrderSelection from "@/components/list-order/ListOrderSelection";
import ListOrderCheckbox from "@/components/list-order/ListOrderCheckbox";
import Description from "@/components/list-order/Description"
import AllergiesDescription from "@/components/list-order/AllergiesDescription"
import dynamic from 'next/dynamic'
import useSWR from "swr";
import { Suspense, useEffect } from "react";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { v7 as uuidv7 } from 'uuid';
const CalOrder = dynamic(() => import('@/components/list-order/CalOrder'), { ssr: false })
import store from "@/lib/store"
export default function ListOrderPage({ params }) {
    const { DataOrderListConfirm, clearDataOrderListConfirm, SetListOrderAddon } = store();
    useEffect(() => {
        clearDataOrderListConfirm()
    }, [])
    useEffect(() => {
        console.log("DataOrderListConfirm", DataOrderListConfirm)
        SetListOrderAddon()
    }, [DataOrderListConfirm])
    const router = useRouter()
    const { slug } = params
    const shopcode = slug[0]; // Assuming slug is a string array
    const item = parseInt(slug[1]);
    const fetcher = (url) => fetch(url, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shopcode, item })
    }).then((res) => res.json())
    const { data, isLoading, error } = useSWR('http://localhost:3003/api/v1/product/byshop/itemdetail', fetcher)
    if (isLoading) {
        return <Loading bgWhite={true} />
    }
    if (error) {
        console.log(error)
        // alert("เกิดข้อผิดพิดพลาด")
        return <Loading bgWhite={true} />
    }
    const { result } = data
    const { price_take_away, th_des, img, subitem, } = result
    return (
        <div className="h-screen  flex flex-col ">
            <ListOrderHeader img={img} name={result.th_name} price={price_take_away} des={th_des ? th_des : "-"} />
            <div className="flex-1 w-full bg-[#008938] ">
                <div className="px-[20px] pb-[20px] pt-3 gap-1 flex flex-col h-full mb-16">
                    <div className="text-white text-16px p-[10px]">เลือกส่วนประกอบ</div>
                    <DeliciousRecipe />
                    {renderListOrder(data)}
                    <Description />
                    <AllergiesDescription />
                </div>
            </div>
            <CalOrder DefaultPrice={price_take_away} />
        </div>
    )
}

const renderListOrder = (data) => {
    const { result } = data
    const { subitem } = result
    return subitem.map((value, index) => {
        const { type, groupname, min, max, listitem, groupid } = value;
        const key = `${type}-${index}`; // Use a unique identifier
        type !== "radio" && console.log(index)
        return type === "radio" ? (
            <ListOrderSelection id={index} key={key} data={listitem} min={min} max={max} title={groupname} num={index + 1} groupid={groupid} />
        ) : (
            <ListOrderCheckbox id={index} key={key} data={listitem} min={min} max={max} title={groupname} num={index + 1} groupid={groupid} />
        );
    });
};

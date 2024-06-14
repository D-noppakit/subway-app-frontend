"use server"
import Image from "next/image"
import demoImage from "/public/imgs/demo/img1.webp"
import ListOrderHeader from "@/components/list-order/ListOrderHeader";
import Head from "next/head";

export default async function ListOrderPage({ params }) {
    const { type } = params
    return (
        <div className="h-full relative flex flex-col">
            <ListOrderHeader />
            <div className="flex-1 w-full bg-[#008938]">
                
            </div>
        </div>

    )
}

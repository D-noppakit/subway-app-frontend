
"use client"
import Image from "next/image";
import ButtonCustom from "@/components/Button/ButtonCustom"
import HeaderOne from "@/components/HeaderOne";
import SelectionTopHome from "@/components/SelectionTopHome";
import SectionBottom from "@/components/HomeComponents/SectionBottom";
import Head from "next/head";
import Selectbox from "@/components/subwaytextbox"

export default function Home() {
  let listData = [
    {id:"1",value:"us"},
    {id:"2",value:"en"}
  ]
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <HeaderOne CartCount={10} />

      <SelectionTopHome />
      {/* <Selectbox type="success" listData={listData}/> */}

      <SectionBottom />
    </>
  );
}

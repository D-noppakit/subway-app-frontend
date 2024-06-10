
"use client"
import Image from "next/image";
import ButtonOrange from "@/components/Button/ButtonOrange"
import HeaderOne from "@/components/HeaderOne";
import SelectionTopHome from "@/components/SelectionTopHome";
import SectionBottom from "@/components/HomeComponents/SectionBottom";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <HeaderOne CartCount={10} />
      <SelectionTopHome />
      <SectionBottom />
    </>
  );
}

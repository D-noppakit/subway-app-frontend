
"use client"
import Image from "next/image";
import ButtonOrange from "@/components/Button/ButtonOrange"
export default function Home() {


  return (
    <>
      <div>Home</div>
      < ButtonOrange btnText={"สั่งออเดอร์"} whenClick={() => { console.log("orangebutton") }} />
    </>
  );
}

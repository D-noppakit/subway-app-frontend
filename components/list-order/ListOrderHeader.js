"use client"
import Link from "next/link"
import ButtonAir from "../Button/ButtonAir"
import DeliciousRecipe from "./DeliciousRecipe"
import demoImage from "/public/imgs/demo/img1.webp"
import Image from "next/image"


export default  function ListOrderHeader({ name = '(6" นิ้ว) อิตาเลียน บีเอ็มที', price = 185, ClickFoodAllergy=()=>console.log("ClickFoodAllergy") }) {
    // const router = useRouter()
    return (
        <div>
            <div className="relative h-full">
                <div className="z-0 w-full h-[300px] relative ">
                    <Image
                        src={demoImage}
                        alt="img-order"
                        className="absolute bottom-0 bg-white"
                        width={1000}
                        height={500}
                        style={{ objectFit: "contain", width: "100%" }}
                    />
                </div>
                <div className="absolute top-0 w-full">
                    <Link href={"/listmenu"}>
                    <ButtonAir ClickClose={()=>{console.log("topage")}} />
                    </Link>
                 
                </div>

                <div
                    className="bg-[#008938] p-5 rounded-t-[26px] h-[140px] w-full absolute bottom-[-100px] z-10"
                    style={{ width: '100%' }}
                >
                    <div className="text-white text-[18px] flex justify-between">
                        <div> {name}</div>
                        <div className="text-[20px]">฿{price}</div>
                    </div>
                    <div className="text-white w-2/3 text-[12px] font-[400]">
                        แซนด์วิชอิตาเลียน บีเอ็มที ขนาด 6 นิ้ว (แนะนำใส่ซอส ตามสูตรเพื่อความอร่อย)
                    </div>
                    <div onClick={ClickFoodAllergy} className="text-white flex justify-between items-center py-3 border-1 border-b">
                        <div className="flex">
                            <div className="w-[19px] h-[19px] me-3">
                                <Image src={"/icon/hospital-white.png"} width={19} height={19} style={{ objectFit: "contain" }} />
                            </div>
                            <div>ข้อมูลสำหรับผู้แพ้อาหาร</div>
                        </div>

                        <div className="w-[14px] h-[14px]">
                            <Image src={"/icon/arrow-white.png"} width={10} height={10} style={{ objectFit: "contain" }} />
                        </div>

                    </div>
                    <div className="text-white text-16px py-2">เลือกส่วนประกอบ</div>
                    <DeliciousRecipe />
                </div>

            </div>
        </div>
    )
}

import Image from "next/image"
import SubwayRewards from "./HomeComponents/SubwayRewards"
import ButtonCustom from "./Button/ButtonCustom"
import LocationAt from "@/components/HomeComponents/LocationAt"
import { useRouter } from "next/navigation"


export default function SelectionTopHome({ NameLocation = "Subway CW Tower", headerText = 'ซับเวย์ ยินดีต้อนรับ', SubText = "วันนี้รับเมนูไหนดีครับ... สั่งออเดอร์ Subway ที่นี่ แล้วไปรับหน้าร้านได้เลยนะ!" , setIsOpenModalLocation }) {
    const router = useRouter()
    return (
        <main className={`w-full h-[466px] bg-[#0b8a45] relative`}>
            <div className="relative ">
                <LocationAt NameLocation={"Subway CW Tower"} Time={"ทันที"} whenClick={() => setIsOpenModalLocation(true) } />
                <div className="font-[700] text-white text-3xl w-[90%] text-center h-[100px] absolute z-10 rounded-[16px] top-[25vh] iphone-se:top-[33vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {headerText}
                </div>
                <div className="text-white text-lg w-[90%] text-center h-[100px] absolute z-10 rounded-[16px] top-[30vh] iphone-se:top-[40vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {SubText}
                </div>
                <div className="w-[50%]  absolute z-10 rounded-[16px] top-[35vh] iphone-se:top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-[55px]">
                        <ButtonCustom btnText={"สั่งออเดอร์"} type="secondary" whenClick={()=>{router.push('/category')}} />
                    </div>
                </div>
            </div>
            <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute z-0 h-[400px] ">
                <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" height={1000} width={3000}
                />
            </div>
            <SubwayRewards />
        </main>
    )
}

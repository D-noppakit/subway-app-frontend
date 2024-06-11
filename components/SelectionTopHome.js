import Image from "next/image"
import SubwayRewards from "./HomeComponents/SubwayRewards"
import ButtonCustom from "./Button/ButtonCustom"

export default function SelectionTopHome({ NameLocation = "Subway CW Tower", headerText = 'ซับเวย์ ยินดีต้อนรับ', SubText = "วันนี้รับเมนูไหนดีครับ... สั่งออเดอร์ Subway ที่นี่ แล้วไปรับหน้าร้านได้เลยนะ!" }) {
    return (
        <main className={`w-full h-[466px] bg-[#0b8a45]`}>
            <div className="relative">
                <div className="w-[90%] h-[70px] bg-white absolute z-10 rounded-[16px] top-[13vh] min-[380px]:top[20vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="text-white text-3xl w-[90%] text-center h-[100px] absolute z-10 rounded-[16px] top-[25vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {headerText}
                </div>
                <div className="text-white text-lg w-[90%] text-center h-[100px] absolute z-10 rounded-[16px] top-[30vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {SubText}
                </div>
                <div className="w-screen absolute z-10 rounded-[16px] top-[40vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ButtonCustom btnText={"สั่งออเดอร์"} width="80%" type="secondary" />
                </div>

            </div>
            <div className="top-0 absolute z-0">
                <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" height={100} width={3000} sizes="100vw" />
                <SubwayRewards />
            </div>
        </main>
    )
}

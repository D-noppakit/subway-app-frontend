import ButtonCustom from "@/components/Button/ButtonCustom";
import CardBGWhite from "@/components/Card/CardBGWhite";
CardBGWhite

export default function Map() {
    return (
        <div className='h-screen w-screen'>
            {/* map in this  */}
            <div className="inline-flex flex-col  absolute bg-[#008938] h-2/3 scroll-auto bottom-0 rounded-t-3xl p-4 w-full">
                <div className="flex w-full justify-between items-center">
                    <div className="text-[14px] text-white flex items-center justify-center">เลือกสาขา</div>
                    <div className="w-[120px] h-[50px] py-[6px] px-[12px]">
                        <ButtonCustom btnText={"สาขาใกล้ฉัน"} textSize="14px" img="" type={"secondary"} /></div>
                </div>
                <CardBGWhite />
                <CardBGWhite />
                <CardBGWhite />
             
            </div>
        </div>
    )
}

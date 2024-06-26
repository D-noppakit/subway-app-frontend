"use client"

import OptionalMenu from "@/components/ContainerListItem/OptionalMenu";
import HeaderOne from "@/components/HeaderOne";
import LocationAt from "@/components/HomeComponents/LocationAt";
import Image from "next/image";
import { useState } from "react";
import CardBurnpoint from "@/components/Card/CardBurnpoint";
import ButtonCustom from "@/components/Button/ButtonCustom";
import RadioPaymentMethod from "@/components/RadioPaymentMethod";

export default function Checkout() {
    const [isOpenBulgur, setIsOpenBulgur] = useState(false)
    const ClickBulgur = (state) => {
        setIsOpenBulgur(state)
    }
    return (
        <div className="h-full">
            <HeaderOne CartCount={0} whenClickBulgur={ClickBulgur} />
            <div style={{ height: "fit-content" }}>
                <main className={`w-full h-[139px] bg-[#0b8a45] relative`}>
                    <div className="relative ">
                        <LocationAt NameLocation={"Subway CW Tower"} Time={"ทันที"} whenClick={() => console.log('ทันที')} />

                    </div>
                    <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute z-0 h-very-small:h-[190px] h-half-medium:h-[207px] h-tall:h-[210px] h-small:h-[198px]" style={{ objectFit: "contain", overflow: "hidden" }}>
                        <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" className="w-full" width={1000} height={139}
                        />
                    </div>

                </main>
            </div>
            <div className="h-very-small:h-[450px] h-small:h-[525px] h-half-medium:h-[630px] h-tall:h-[680px] h-very-tall:h-[700px] overflow-y-scroll">
                <div className="w-full p-5">
                    <div className="h-[385px]"></div>
                </div>
                <OptionalMenu />
                <div className="w-full px-5 mb-[15px]">
                    <span className="text-[#0C8A44] text-[16px] font-bold">คูปองส่วนลด</span>
                    <div className="h-[40px] w-full rounded-[20px] bg-[#F6F6F6] flex items-center justify-between px-[10px] mt-[5px]">
                        <div className="flex items-center">
                            <Image src={"/icon/tag.png"} alt="discounticon" className="w-[24px] h-[24px]" width={100} height={100} />
                            <span className="text-[#0C8A44] text-[14px] font-medium ml-[12px]">Add Coupon</span>
                        </div>
                        <div className="w-[50px] h-[25px] rounded-[100px] bg-[#0C8A4417] flex justify-center items-center">
                            <span className="text-[#0C8A44] text-[12px] font-medium">Add</span>
                        </div>
                    </div>
                </div>
                <CardBurnpoint maxcardno={''} />
                <div className="w-full px-5 mb-[15px]">
                    <span className="text-[#0C8A44] text-[16px] font-bold">การชำระเงิน</span>
                    <div className="flex flex-col gap-[5px] mt-[5px]">
                        <RadioPaymentMethod image_path="/icon/CreditCard1StreamlineCore.svg.png" input_group="payment_method" method_name="Credit Card"/>
                        <RadioPaymentMethod image_path="/logo/maxme_logo.png" input_group="payment_method" method_name="Max Me Wallet"/>
                        <RadioPaymentMethod image_path="/logo/thai_qr_logo.png" input_group="payment_method" method_name="Thai QR PromptPay"/>
                    </div>
                </div>
                <div className="w-full px-5 mb-[50px]">
                    <span className="text-[#0C8A44] text-[16px] font-bold">สรุปรายการชำระ</span>
                    <div className="flex flex-col gap-[5px] mt-[5px] gap-[10px]">
                        <div className="flex justify-between items-center text-[12px]">
                            <span>ยอดรวม</span>
                            <span>฿480</span>
                        </div>
                        <div className="text-[#D83A3A]">
                            <div className="flex justify-between items-center text-[14px]">
                                <span>Coupon Discount</span>
                                <span>-฿20</span>
                            </div>
                            <div className="flex flex-col text-[12px] pl-[10px] font-normal">
                                <span>• Discount detail</span>
                            </div>
                        </div>
                        <div className="text-[#FF822B]">
                            <div className="flex justify-between items-center text-[14px]">
                                <span>ใช้ Max Point เป็นส่วนลด</span>
                                <span>-฿20</span>
                            </div>
                            <div className="flex flex-col text-[12px] pl-[10px] font-normal">
                                <span>• 200 Max Point</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-[16px]">
                            <span>ยอดชำระ</span>
                            <span>฿440</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full px-5 h-very-small:h-[75px] flex items-center justify-center">
                <div className={`flex justify-center items-center text-white w-full h-[55px]`} >
                    <button className={`flex justify-between items-center w-full h-full p-2 rounded-[100px] text-xl bt-custom primary`}>
                        <div>ชำระเงิน</div>
                        <div className={`text-[10px] font-mediam`}>฿440</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

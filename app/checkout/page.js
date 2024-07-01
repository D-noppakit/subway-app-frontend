"use client"

import OptionalMenu from "@/components/ContainerListItem/OptionalMenu";
import HeaderOne from "@/components/HeaderOne";
import LocationAt from "@/components/HomeComponents/LocationAt";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardBurnpoint from "@/components/Card/CardBurnpoint";
import ButtonCustom from "@/components/Button/ButtonCustom";
import RadioPaymentMethod from "@/components/RadioPaymentMethod";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import store from "@/lib/store";
import CardListItemSummary from "@/components/Card/CardListItemSummary";
import { useRouter } from "next/navigation";

export default function Checkout() {
    const { UserInfo, DiscountInfo, SetDiscountInfo, resetDiscountInfo, Cart, ListOrderTotal } = store();
    const [paymentMethod, setPaymentMethod] = useState('');
    const router = useRouter()
    const [orderList, setorderList] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isOpenBulgur, setIsOpenBulgur] = useState(false)
    const ClickBulgur = (state) => {
        setIsOpenBulgur(state)
    }
    const handlePaymentMethod = (method) => {
        setPaymentMethod(method)
    };
    const handleAddCoupon = (Coupon) => {
        SetDiscountInfo({ Coupon: 'ABC' })
    };
    const handleCart = (itemlist) => {
        setorderList(itemlist)
        let total_amount = 0
        console.log(itemlist);
        for (let i = 0; i < itemlist.length; i++) {
            const element = itemlist[i];
            total_amount += element.ListOrder.total
        }
        setTotalAmount(total_amount)
    }
    useEffect(() => {
        resetDiscountInfo()
        handleCart(Cart)
    }, [])
    return (
        <div className="h-full">
            <HeaderOne whenClickBulgur={ClickBulgur} />
            <div style={{ height: "fit-content" }}>
                <main className={`w-full h-[139px] bg-[#0b8a45] relative`}>
                    <div className="relative ">
                        <LocationAt NameLocation={"Subway CW Tower"} Time={"ทันที"} whenClick={() => console.log('ทันที')} />
                    </div>
                    <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute z-0 h-very-small:h-[190px] h-half-medium:h-[207px] h-tall:h-[210px] h-small:h-[198px]" style={{ objectFit: "contain", overflow: "hidden" }}>
                        <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" className="w-full" width={1000} height={139} />
                    </div>
                </main>
            </div>
            <div className="h-very-small:h-[450px] h-small:h-[525px] h-half-medium:h-[630px] h-tall:h-[680px] h-very-tall:h-[700px] overflow-y-scroll">
                <div className="w-full px-5 my-[15px]">
                    <span className="text-[#0C8A44] text-[16px] font-bold">สรุปรายการ</span>
                    <div className="gap-[10px] mt-[10px] flex flex-col overflow-y-scroll max-h-[300px]">
                        {renderOrder(orderList)}
                        <div className="w-full flex justify-center items-center mt-[15px]">
                            <div onClick={() => router.push('/category')} className="bg-[#FF8A0038] rounded-[100px] flex justify-center items-center text-[#FF8A00] w-2/5 h-[30px]">
                                <span>Add menu</span>
                            </div>
                        </div>
                    </div>
                </div>
                <OptionalMenu />
                <div className="w-full px-5 mb-[15px]">
                    <span className="text-[#0C8A44] text-[16px] font-bold">คูปองส่วนลด</span>
                    <div className="h-[40px] w-full rounded-[20px] bg-[#F6F6F6] flex items-center justify-between px-[10px] mt-[5px]">
                        <div className="flex items-center">
                            <Image src={"/icon/tag.png"} alt="discounticon" className="w-[24px] h-[24px]" width={100} height={100} />
                            <span className="text-[#0C8A44] text-[14px] font-medium ml-[12px]">Add Coupon</span>
                        </div>
                        <div onClick={handleAddCoupon} className="w-[50px] h-[25px] rounded-[100px] bg-[#0C8A4417] flex justify-center items-center">
                            <span className="text-[#0C8A44] text-[12px] font-medium">Add</span>
                        </div>
                    </div>
                </div>
                <CardBurnpoint maxcardno={UserInfo.flag_maxcard} whenClick={UserInfo.flag_maxcard !== 'Y' ? setIsOpenBulgur : null} />
                <div className="w-full px-5 mb-[15px]">
                    <span className="text-[#0C8A44] text-[16px] font-bold">การชำระเงิน</span>
                    <div className="flex flex-col gap-[5px] mt-[5px]">
                        <RadioPaymentMethod image_path="/icon/CreditCard1StreamlineCore.svg.png" input_group="payment_method" method_name="Credit Card" setMethod={() => handlePaymentMethod('C')} />
                        <RadioPaymentMethod image_path="/logo/maxme_logo.png" input_group="payment_method" method_name="Max Me Wallet" setMethod={() => handlePaymentMethod('W')} />
                        <RadioPaymentMethod image_path="/logo/thai_qr_logo.png" input_group="payment_method" method_name="Thai QR PromptPay" setMethod={() => handlePaymentMethod('QR')} />
                    </div>
                </div>
                <div className="w-full px-5 mb-[40px]">
                    <span className="text-[#0C8A44] text-[16px] font-bold">สรุปรายการชำระ</span>
                    <div className="flex flex-col gap-[5px] mt-[5px] gap-[10px]">
                        <div className="flex justify-between items-center text-[12px]">
                            <span>ยอดรวม</span>
                            <span>฿{totalAmount}</span>
                        </div>
                        <div className={"text-[#D83A3A]" + (DiscountInfo.Coupon ? ' block' : ' hidden')}>
                            <div className="flex justify-between items-center text-[14px]">
                                <span>Coupon Discount</span>
                                <span>-฿20</span>
                            </div>
                            <div className="flex flex-col text-[12px] pl-[10px] font-normal">
                                <span>• Discount detail</span>
                            </div>
                        </div>
                        <div className={`text-[#FF822B]`}>
                            <div className="flex justify-between items-center text-[14px]">
                                <span>ใช้ Max Point เป็นส่วนลด</span>
                                <span>-฿{DiscountInfo.PointToBaht}</span>
                            </div>
                            <div className={`flex-col text-[12px] pl-[10px] font-normal${parseInt(DiscountInfo.PointToBaht) > 0 ? ' flex' : ' hidden'}`}>
                                <span>• {parseInt(DiscountInfo.PointToBaht * 10)} Max Point</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-[16px]">
                            <span>ยอดชำระ</span>
                            <span>฿{totalAmount - DiscountInfo.PointToBaht}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full px-5 h-very-small:h-[75px] flex items-center justify-center">
                <div className="h-[55px] w-full">
                    <ButtonCustom btnText={'ชำระเงิน'} btnText2={`฿${totalAmount - DiscountInfo.PointToBaht}`} checkout={true} type={paymentMethod == '' ? 'disabled' : 'primary'} img="" padding={'20px'} />
                </div>
            </div>
            <div className={"absolute top-0 z-50"}>
                <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
            </div>
        </div>
    );
    function renderOrder(list_order) {
        const ORDER_LIST = []
        for (let i = 0; i < list_order.length; i++) {
            const element = list_order[i]
            let eListorder = []
            eListorder = element.ListOrder.list.sort((a, b) => b.type.localeCompare(a.type))
            let description = ''
            eListorder.map((e) => {
                if (e.type == 'radio') {
                    description += e.data.th_name + ' / '
                } else {
                    e.data.map((el) => {
                        description += el.th_name + ' / ';
                    })
                }
            })
            description = replaceLastChar(description, ' / ', '')
            ORDER_LIST.push(<CardListItemSummary key={element.itemcode + '_' + i} title={element.th_name} des={description} img={element.img} price={element.price_eat_in} quntity={element.ListOrder.quantity}/>)
        }
        return (
            <div>
                {ORDER_LIST}
            </div>
        )
    }

    function replaceLastChar(str, charToReplace, replacementChar) {
        // Find the last occurrence of the character
        const lastIndex = str.lastIndexOf(charToReplace);
      
        // If the character is not found, return the original string
        if (lastIndex === -1) {
          return str;
        }
      
        // Split the string into two parts
        const before = str.slice(0, lastIndex);
        const after = str.slice(lastIndex + 2);
      
        // Return the new string with the last occurrence replaced
        return before + replacementChar + after;
      }
      
}

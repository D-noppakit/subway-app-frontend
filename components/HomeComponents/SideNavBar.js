import React, { useState, lazy } from 'react';
import HeaderTwo from "@/components/HeaderTwo"
import CardWelcomeCustomer from "@/components/CardWelcomeCustomer"
import Image from 'next/image';
import logo1 from "@/public/imgs/timenav.png"
import choiceMark from "@/public/imgs/Choice-Mark.png"
import PinMap from "@/public/imgs/pin-map.png"
import PersonSetting from "@/public/imgs/user-setting-bolt-nut.png"
import QAimg from  "@/public/imgs/QAimg.png"
 
export default function SideNavBar({ isOpen = false, Close = () => console.log("Close") }) {
    // const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        Close(!isOpen)
    }
    return (
        <div >
            <div
                className={`fixed top-0 left-0 h-full bg-gray-100 transition-transform duration-300 ease-out ${isOpen ? 'w-full transform translate-x-0' : 'w-[-100px] transform -translate-x-full'}`}
            >
                {isOpen && <HeaderTwo Close={handleClose} />}
                <div className="p-4">

                    <div className=' relative mt-1 mb-5 flex justify-center'>
                        <CardWelcomeCustomer text1={"ลงชื่อเข้าใช้"} text2={"ปลดล็อคสิทธิประโยชน์อีกเพียบ ด้วยสมาชิก ซับเวย์ รีวอร์ด"} btnText={"ลงชื่อเข้าใช้ / สมัครสมาชิก"} />
                    </div>
                    <ButtonMenu text={"ออเดอร์ของฉัน"} img={logo1} />
                    <ButtonMenu text={"ซับเวย์ รีวอร์ด"} img={choiceMark} />
                    <ButtonMenu text={"ค้นหาสาขา"} img={PinMap} />
                    <ButtonMenu text={"ตั้งค่าโปรไฟล์"} img={PersonSetting} />
                    <ButtonMenu text={"ช่วยเหลือ"} img={QAimg} />
                    
                </div>
            </div>
        </div>
    );
}


function ButtonMenu({ text, img }) {
    return (
        <div className='mt-3 rounded-lg flex  flex-row justify-between items-center h-[56px] w-full bg-white ps-[12px] pe-[12px] pt-[16px] pb-[16px]'>
            <div className='flex'>
                <div className={"w-50px pe-2 flex justify-center items-center"}>
                    <Image src={img} width={25} height={25} alt='arrow' />
                </div>
                <div className='flex justify-center items-center' >{text}</div>
            </div>
            <div>
                <Image src={"/imgs/arrow-green.png"} width={15} height={15} alt='arrow' />
            </div>
        </div>
    )
}
'use client'
import HeaderOne from '@/components/HeaderOne'
import React, { useState } from 'react'
import Image from "next/image"
import LocationPin from "@/public/icon/LocationPin.png"
import InformationRed from "@/public/icon/InformationRed.png"

export default function page() {
  const [isOpenBulgur, setIsOpenBulgur] = useState(false)
  const ClickBulgur = (state) => {
    console.log("ClickBulgur", state)
    setIsOpenBulgur(state)
  }
  return (
    <div className='relative'>
      <HeaderOne CartCount={0} whenClickBulgur={ClickBulgur} />
      <div style={{ height: "fit-content" }}>
        <main className={`w-full h-[139px] bg-[#0b8a45] relative`}>
          <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute z-0 h-[200px] " style={{ objectFit: "contain", overflow: "hidden" }}>
            <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" className="w-full" width={1000} height={139} />

          </div>

        </main>
        <div style={{ top: '70px', position: 'absolute' }} className='w-screen flex p-5 '>
          <div className='bg-[--primary-subway-white] w-full border rounded-[16px] border-[--neutral300] pt-[10px] pb-[10px] ps-[16px] pe-[16px]'>
            <div className='flex flex-col border-b border-[--neutral300]'>
              <div className='flex text-[14px] text-[--primary-subway-green] justify-center leading-[22.98px]'>
                หมายเลขออเดอร์
              </div>
              <div className='flex text-[68.69px] text-[--primary-subway-yellow] justify-center leading-[82.43px]'>
                2546
              </div>
            </div>
            <div className='flex flex-col border-b border-[--neutral300] p-[10px]'>
              <div className='flex flex-row'>
                <div className='flex flex-row w-1/3'>
                  <div>
                    <Image src={LocationPin} alt='location' width={18} height={18} />
                  </div>
                  <div className='ms-1'>
                    <span>รับที่ร้าน</span>
                  </div>

                </div>
                <div className='flex flex-row w-2/3 text-right justify-end '>
                  <span>Subway CW Tower PJ42+9QX, Phra Khanong Nuea, Watthana, Bangkok 10110</span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row w-1/3'>
                  <div>
                    <Image src={LocationPin} alt='location' width={18} height={18} />
                  </div>
                  <div className='ms-1'>
                    <span>ติดต่อร้าน</span>
                  </div>

                </div>
                <div className='flex flex-row w-2/3 text-right justify-end'>
                  <span>02-343-4322</span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row w-1/3'>
                  <div>
                    <Image src={LocationPin} alt='location' width={18} height={18} />
                  </div>
                  <div className='ms-1'>
                    <span>ทันที</span>
                  </div>

                </div>
                <div className='flex flex-row w-2/3 text-right justify-end'>
                  <span>กรุณารับออเดอร์ได้ตั้งแต่ 12:15 น.</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col border-b border-[--neutral300]'>
              <div className='flex text-[14px] text-[--primary-subway-green] '>
                สรุปรายการ
              </div>
              <div className='container-detail flex flex-col'>
                <div className='item-title flex flex-row justify-between'>
                  <div>(6" นิ้ว) อิตาเลียน บีเอ็มที</div>
                  <div>฿240</div>
                </div>
                <div className='item-des'>
                  <span>ฮันนี่โอ๊ต / ใส่ชีสแผ่น (เชดด้า ชีส) / ผักกาดแก้ว / มะเขือเทศ / แตงกวา / แตงกวาดอง / พริกเขียว/มะกอก / บาร์บีคิว / ซีซาร์ / มอสซาเรลล่าชีส +25฿ / ชุดที่ 1 (ช็อกชิพ คุกกี้ + เป็ปซี่ 22 ออน) +79฿</span>
                </div>
              </div>
              <div className='container-detail flex flex-col'>
                <div className='item-title flex flex-row justify-between'>
                  <div>(6" นิ้ว) อิตาเลียน บีเอ็มที</div>
                  <div>฿240</div>
                </div>
                <div className='item-des'>
                  <span>ฮันนี่โอ๊ต / ใส่ชีสแผ่น (เชดด้า ชีส) / ผักกาดแก้ว / มะเขือเทศ / แตงกวา / แตงกวาดอง / พริกเขียว/มะกอก / บาร์บีคิว / ซีซาร์ / มอสซาเรลล่าชีส +25฿ / ชุดที่ 1 (ช็อกชิพ คุกกี้ + เป็ปซี่ 22 ออน) +79฿</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col border-b border-[--neutral300]'>
              <div className='flex text-[12px] text-[--primary-subway-green] '>
                คำขอเพิ่มเติม
              </div>
              <div className='container-detail flex flex-col'>
                <div className='item-des'>
                  <span>ขอไม่อุ่นนะคะ</span>
                </div>
              </div>
              <div className='container-detail flex flex-col'>
                <div className='item-title flex flex-row items-center'>
                  <div>
                    <Image src={InformationRed} alt='InformationRed' width={18} height={18} />
                  </div>
                  <div style={{paddingLeft:"5px",color:"var(--red500)"}}>มีอาการแพ้งา และแตงกวาดอง</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col border-b border-[--neutral300]'>
              <div className='flex text-[12px] text-[--primary-subway-black] '>
                ยอดรวม
              </div>
              <div className='container-detail flex flex-col'>
                <div className='item-des'>
                  <span>ขอไม่อุ่นนะคะ</span>
                </div>
              </div>
              <div className='container-detail flex flex-col'>
                <div className='item-title flex flex-row items-center'>
                  <div>
                    <Image src={InformationRed} alt='InformationRed' width={18} height={18} />
                  </div>
                  <div style={{paddingLeft:"5px",color:"var(--red500)"}}>มีอาการแพ้งา และแตงกวาดอง</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import CardHeaderGreen from '@/components/Card/CardHeaderGreen'
import HomeImage from "@/public/imgs/home.png"
import Image from 'next/image'
import ButtonCustom from "@/components/Button/ButtonCustom";
export default function PickUpAt({ setIsOpenModalLocation, }) {
  const router = useRouter()
  const [activeBTN1, setActiveBTN1] = useState(true)
  const [activeBTN2, setActiveBTN2] = useState(false)
  const [openSelect, setOpenSelect] = useState(false)

  const options = [
    { value: '1', label: '10:30 - 11:00' },
    { value: '2', label: '11:30 - 11:00' },
    { value: '3', label: '12:30 - 11:00' },
  ];
  const [selectedOption, setSelectedOption] = useState({ value: '1', label: '10:30 - 11:00' },);
  useEffect(() => {
    console.log({ selectedOption })
  }, [selectedOption])
  useEffect(() => {
    if (activeBTN2) {
      setOpenSelect(true)
    } else {
      setOpenSelect(false)
    }

  }, [activeBTN2, activeBTN1])
  return <CardHeaderGreen close={() => setIsOpenModalLocation(false)} >
    <div className='flex items-center justify-center flex-col'>
      <div className='flex w-full text-[#008938] font-[700] text-[24px] items-center'>
        <div className='pe-2'>
          <Image src={HomeImage} height={20} width={20} alt="home" />
        </div>
        <div> รับที่ร้าน</div>
      </div>
      <div className='w-full text-[14px] text-[#2C2C30]'>
        สาขา
      </div>
      <div className='p-3 flex border border-[#DFE0E7 rounded-xl mt-1'>
        <div className="text-sm text-[#008938] w-10/12 flex flex-col gap-2">
          <div>  แม็กซ์แวลู, 255 ทางหลวงพิเศษหมาย เลข 7 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหาน</div>
          <div className="text-[#72747D] text-[12px]"> ทุกวัน 7:00 - 19:00 น.</div>
        </div>
        <div className="w-2/12 flex justify-center items-center">
          <Image src={"/icon/LocationPin.png"} height={24} width={24} alt="image" />
        </div>
      </div>
      <div className='w-full text-[14px] text-[#2C2C30] py-3'>
        รูปแบบการสั่ง
      </div>
      <div className='w-full flex justify-around items-center text-white gap-[10px]'>
        <button onClick={() => { setActiveBTN1(!activeBTN1); setActiveBTN2(activeBTN1) }} className={`px-[12px] py-[6px] border border-1 text-[#008938] border-[#DFE0E7] w-[155px] rounded-[100px] ${activeBTN1 && "bg-[#F2B700] text-white"} `}
        >รับทันที</button>
        <button onClick={() => { setActiveBTN2(!activeBTN2); setActiveBTN1(!activeBTN1) }} className={`px-[12px] py-[6px] border border-1 text-[#008938] border-[#DFE0E7] w-[155px] rounded-[100px] ${activeBTN2 && "bg-[#F2B700] text-white"} `}
        >สั่งล่วงหน้า</button>
      </div>
      {openSelect && <div className="flex flex-col w-full">
        <div className="mt-3 w-full">เลือกเวลารับ</div>
        <div className="w-full">
          <Select className="w-full h-[48px] mt-4"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderRadius: '100px',
                height: "48px"
              }),
              indicatorSeparator: (baseStyles) => ({
                display: 'none',
              }),
            }}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
      </div>}

      <div className="w-full mt-5">
        <ButtonCustom type={"primary"} img="" btnText={"ยืนยัน"} whenClick={() => { router.push("/map") }} />
      </div>
    </div>
  </CardHeaderGreen>
}

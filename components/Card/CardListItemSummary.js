'use client'
import React, { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ArrowGray from '@/public/icon/ArrowDownGray.png';
import { CSSTransition } from "react-transition-group";
export default function CardListItemSummary({ whenClick = () => console.log("CardListItem"), title = '(6" นิ้ว) Cheese & Egg', des = "แซนด์วิชชีสและไข่ ขนาด 6 นิ้ว (เมนูนี้มีชีสตาม สูตร หากแพ้ชีสโปรดแจ้ง)(เมนูนี้มีชีสตาม สูตร หากแพ้ชีสโปรดแจ้ง)", price = 185, fullPrice = 0, isDisabled = false, img = "/imgs/demo/img1.webp", tagText = "", tagBgColor = "" }) {
  let hasdiscout = fullPrice && fullPrice > 0 && fullPrice > price
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState(0);
  const targetRef = useRef(null);
  useLayoutEffect(() => {
    if (targetRef?.current) {
      setHeight(targetRef.current.offsetHeight);
    }
  }, [toggle]);
  return (
    <div className={`w-full card-item ${isDisabled ? 'isDisabled' : ''} flex border-b-[1px] border-solid border-[#E9E9E9] pb-[20px] pt-[10px]`} onClick={!isDisabled ? whenClick : null}>
      <Image src={img} alt="img1" height={93} width={93} style={{ borderRadius: "12px", maxHeight: '93px' }} />
      <div className={'w-full'} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingLeft: "10px" }}>
        <div className='flex flex-col justify-between gap-[5px]'>
          <div className='flex justify-between items-center'>
            <span className='multiline-span' style={{ maxHeight: "50px", lineHeight: "1.8" }}>{title}</span>
            <div onClick={() => setToggle(!toggle)} className='w-[24px] h-[24px] flex justify-center items-center'>
              <Image src={ArrowGray} alt="arrowgray" height={50} width={50} className='w-3/4' />
            </div>
          </div>
          <div>
            <CSSTransition in={toggle} timeout={300} classNames="group" unmountOnExit >
              <span className='multiline-span' style={{ maxHeight: "50px", lineHeight: "1.8", color: "var(--neutral700)", fontSize: "12px" }}>{des}</span>
            </CSSTransition>
          </div>
          <div className='bg-[#FF8A0038] rounded-[100px] w-[55px] h-[20px] flex justify-center items-center text-[#FF8A00]'>
            <span>Edit</span>
          </div>
        </div>
        <div className='flex justify-between items-center w-full mt-[15px] text-[24px]'>
          <div className='flex items-center justify-between w-[90px] h-[30px]'>
            <div className='bg-[#0C8A44] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-white'>
              <span>-</span>
            </div>
            <span className='text-[#F3B817]'>1</span>
            <div className='bg-[#0C8A44] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-white'>
              <span>+</span>
            </div>
          </div>
          <div className={`${(hasdiscout > 0 ? "price-discount " : "price ")}flex text-[16px] justify-between`}>
            <div className='w-full text-end'>
              ฿{price}
              {hasdiscout ? <div style={{ marginLeft: "5px", color: "var(--neutral600)", textDecorationLine: "line-through" }}>
                ฿{fullPrice}
              </div> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

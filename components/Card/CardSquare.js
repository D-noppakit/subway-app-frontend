import React from 'react'
import Image from 'next/image'
import Plus from "@/public/imgs/plus.png"

import BadgeCustom from '@/components/Badge/BadgeCustom'
export default function CardSquare({ whenClick = () => console.log("CardSquare"), title = 'Italian B.M.T.', price = 185, fullPrice = 200, isDisabled = false, tagText = "", tagBgColor = "", img = "/imgs/demo/img1.webp" }) {
  let hasdiscout = fullPrice && fullPrice > 0 && fullPrice > price
  
  return (
    <div className='justify-self-center' style={{ display: "flex", flexDirection: 'column', width: 'fit-content' }} onClick={whenClick}>
      <div style={{ position: "relative" }}>
        <Image src={img} alt="img1" height={1000} width={1000}  style={{ borderRadius: "16px", width:"100%",objectFit:"contain"}} />
        {tagText && tagBgColor ? (<div style={{position:"absolute",top:"7px",right:"7px"}}><BadgeCustom tagText = {tagText} tagBgColor = {tagBgColor} /></div>) : null}
      </div>

      <div>
        <span>{title}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "14px" }}>
        <div className={hasdiscout > 0 ? "price-discount" : "price"} style={{ display: 'flex' }}>฿{price}
          {hasdiscout ? <div style={{ marginLeft: "5px", color: "var(--neutral600)", textDecorationLine: "line-through" }}>
            ฿{fullPrice}
          </div> : null}
        </div>

        <div style={{ backgroundColor: "var(--green600)", color: "var(--neutral50)", width: "24px", height: "24px", borderRadius: "999px", display: "flex", justifyContent: "center", fontWeight: "bold" }}>
          <Image src={Plus} width={24} height={24} alt='img' />
        </div>
      </div>
    </div>
  )
}

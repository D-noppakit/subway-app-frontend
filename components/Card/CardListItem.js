import React from 'react'
import Image from 'next/image'
import logo1 from "@/public/imgs/timenav.png"

export default function CardListItem({ whenClick = () => console.log("CardListItem"), title = '(6" นิ้ว) Cheese & Egg', des = "แซนด์วิชชีสและไข่ ขนาด 6 นิ้ว (เมนูนี้มีชีสตาม สูตร หากแพ้ชีสโปรดแจ้ง)(เมนูนี้มีชีสตาม สูตร หากแพ้ชีสโปรดแจ้ง)", price = 185, fullPrice = 0, isDisabled = false, img = "/imgs/demo/img1.webp" }) {
  let hasdiscout = fullPrice && fullPrice > 0 && fullPrice > price
  return (
    <div className={'w-full'} style={{ display: "flex", flexDirection: 'row', height: '93px' }} onClick={whenClick}>
      <Image src={img} alt="img1" height={93} width={93} style={{ borderRadius: "12px" }} />

      <div className={'w-full'} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: "14px", paddingLeft: "10px" }}>
        <div>
          <span className='multiline-span' style={{ maxHeight: "50px", lineHeight: "1.8" }}>{title}</span>
        </div>
        <div>
          <span className='multiline-span' style={{ maxHeight: "50px", lineHeight: "1.8", color: "var(--neutral700)",fontSize: "12px" }}>{des}</span>
        </div>
        <div className={hasdiscout > 0 ? "price-discount" : "price"} style={{ display: 'flex', fontSize: '16px' }}>Total ฿{price}
          {hasdiscout ? <div style={{ marginLeft: "5px", color: "var(--neutral600)", textDecorationLine: "line-through" }}>
            ฿{fullPrice}
          </div> : null}
        </div>

        {/* <div style={{ display: "flex", }}>
          <button style={{ width: "114px", height: "40px", borderRadius: "100px", border: "1px solid var(--neutral300)", gap: "8px", display: "flex", alignItems: "center", padding: "8px 10px 8px 10px", color: "var(--green600)" }}>
            <Image src={logo1} width={24} height={24} />
            สั่งอีกครั้ง
          </button>
        </div> */}
      </div>
    </div>
  )
}

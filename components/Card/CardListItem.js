import React from 'react'
import Image from 'next/image'
import logo1 from "@/public/imgs/timenav.png"
import Plus from "@/public/imgs/plus.png"
import BadgeCustom from '@/components/Badge/BadgeCustom'

export default function CardListItem({ whenClick = () => console.log("CardListItem"), title = '(6" นิ้ว) Cheese & Egg', des = "แซนด์วิชชีสและไข่ ขนาด 6 นิ้ว (เมนูนี้มีชีสตาม สูตร หากแพ้ชีสโปรดแจ้ง)(เมนูนี้มีชีสตาม สูตร หากแพ้ชีสโปรดแจ้ง)", price = 185, fullPrice = 0, isDisabled = false, img = "/imgs/demo/img1.webp", tagText = "", tagBgColor = "" }) {
  let hasdiscout = fullPrice && fullPrice > 0 && fullPrice > price
  return (
    <div className={`w-full card-item ${ isDisabled ? 'isDisabled': ''}`} style={{ display: "flex", flexDirection: 'row', minHeight: '93px' }} onClick={!isDisabled ? whenClick : null}>
      <Image src={img} alt="img1" height={93} width={93} style={{ borderRadius: "12px",maxHeight:'93px' }} />

      <div className={'w-full'} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: "14px", paddingLeft: "10px" }}>
        {tagText && tagBgColor ? (<BadgeCustom tagText={tagText} tagBgColor={tagBgColor} />) : null}

        <div>
          <span className='multiline-span' style={{ maxHeight: "50px", lineHeight: "1.8" }}>{title}</span>
        </div>
        <div>
          <span className='multiline-span' style={{ maxHeight: "50px", lineHeight: "1.8", color: "var(--neutral700)", fontSize: "12px" }}>{des}</span>
        </div>
        <div className={hasdiscout > 0 ? "price-discount" : "price"} style={{ display: 'flex', fontSize: '16px', justifyContent: "space-between" }}>
          <div>
            ฿{price}
            {hasdiscout ? <div style={{ marginLeft: "5px", color: "var(--neutral600)", textDecorationLine: "line-through" }}>
              ฿{fullPrice}
            </div> : null}
          </div>
          {!isDisabled ? <div style={{ backgroundColor: "var(--green600)", color: "var(--neutral50)", width: "24px", height: "24px", borderRadius: "999px", display: "flex", justifyContent: "center", fontWeight: "bold" }}>
            <button>
              <Image alt="Plus" src={Plus} width={24} height={24} />
            </button>
          </div> :
            <div>สินค้าหมด</div>
          }

        </div>


      </div>
    </div>
  )
}

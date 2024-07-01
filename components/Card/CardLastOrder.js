import React from 'react'
import Image from 'next/image'
import logo1 from "@/public/imgs/timenav.png"

export default function CardLastOrder({ whenClick = () => console.log("CardLastOrder"), date = '29 พ.ค. 2024', title = 'ออเดอร์ที่สั่งล่าสุด', price = 185, fullPrice = 0, isDisabled = false, img = "/imgs/demo/img1.webp" }) {
  let hasdiscout = fullPrice && fullPrice > 0 && fullPrice > price
  return (
    <div className={'w-full'} style={{ display: "flex", flexDirection: 'row',border:"1px solid var(--neutral500)", borderRadius:"16px" }} onClick={whenClick}>
      <Image src={img} alt="img1" height={164} width={164} sizes="100vw" style={{ borderRadius: "16px 0px 0px 16px" }} />

      <div className={'w-full'} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: "14px",padding:"12px" }}>
        <div style={{fontSize:"12px",color:"var(--orange400)" }}>
          <span>{date}</span>
        </div>
        <div>
          <span className='multiline-span' style={{maxHeight:"50px",lineHeight:"1.8"}}>{title}</span>
        </div>
        <div className={hasdiscout > 0 ? "price-discount" : "price"} style={{ display: 'flex',fontSize:'16px' }}>Total ฿{price}
          {hasdiscout ? <div style={{ marginLeft: "5px", color: "var(--neutral600)", textDecorationLine: "line-through" }}>
            ฿{fullPrice}
          </div> : null}
        </div>

        <div style={{ display: "flex",}}>
          <button style={{ width: "114px", height: "40px", borderRadius:"100px", border:"1px solid var(--neutral300)", gap:"8px",display:"flex", alignItems:"center", padding:"8px 10px 8px 10px", color:"var(--green600)"}}>
            <Image src={logo1} width={24} height={24} alt='logo'/>
            สั่งอีกครั้ง
          </button>
        </div>
      </div>
    </div>
  )
}

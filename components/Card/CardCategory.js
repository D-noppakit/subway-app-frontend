import React from 'react'
import Image from 'next/image'
import Plus from "@/public/imgs/plus.png"

import BadgeCustom from '@/components/Badge/BadgeCustom'
export default function CardCategory({ link = '', title = 'เมนูโปรดของฉัน' }) {
    return (
        <div className='justify-self-center' style={{ display: "flex", flexDirection: 'column', width: 'fit-content' }} onClick={whenClick}>
            <Image src={"/imgs/demo/img1.webp"} alt="img1" height={164} width={164} sizes="100vw" style={{ borderRadius: "16px" }} />

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
                    <Image src={Plus} width={24} height={24} />
                </div>
            </div>
        </div >
    )
}

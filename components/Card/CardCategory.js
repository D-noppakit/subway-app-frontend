import React from 'react'
import Image from 'next/image'
import Plus from "@/public/imgs/plus.png"

import BadgeCustom from '@/components/Badge/BadgeCustom'
export default function CardCategory({ link = '', title = 'เมนูโปรดของฉัน' }) {
    return (
        <div className='justify-self-center' style={{ display: "flex", flexDirection: 'column', width: 'fit-content' }} >
            <Image src={"/imgs/demo/img1.webp"} alt="img1" height={164} width={164} sizes="100vw" style={{ borderRadius: "16px" }} />

            <div className='flex' style={{justifyContent:"center",alignItems:"center",color:"var(--primary-subway-green)", fontSize:"16px",padding:"7px"}}>
                <span>{title}</span>
            </div>
           
        </div >
    )
}

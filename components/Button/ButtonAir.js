import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function ButtonAir({ ClickClose = () => console.log("Click1"), ClickShare = () => console.log("Click2"), ClickFav = () => console.log("Click3") }) {
    return (
        <div className='flex justify-between items-center w-full h-[77px] p-5'>
             <Link href={"/listmenu"}>
             <Image onClick={ClickClose} alt='close' src={"/icon/Close-green.png"} height={45} width={45} style={{ objectFit: "contain" }} />
             </Link>
            
            <div className='gap-3 flex'>
                <Image onClick={ClickShare} alt='share' src={"/icon/Share.png"} height={45} width={45} style={{ objectFit: "contain" }} />
                <Image onClick={ClickFav} alt='fav' src={"/icon/Favorite.png"} height={45} width={45} style={{ objectFit: "contain" }} />
            </div>
        </div>
    )
}

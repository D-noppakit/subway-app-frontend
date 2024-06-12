import Image from 'next/image'
import React, { lazy } from 'react'
import subwayLogoWhite from '@/public/imgs/subway-logo-white.png'
export default function SubwayRewards({ Click = () => console.log("click reward"), point, text }) {
    return (
        <div className="w-full h-[75px] bg-[#97D700] absolute bottom-[0vh] rounded-t-[32px]" onClick={Click}>
            <div className='flex h-full p-3 w-full'>

                <Image src={subwayLogoWhite} width={45} height={45} style={{ objectFit: "contain" }} alt='img' />
                <div className='flex w-full flex-col ps-4'>
                    <div className='text-[#008938] w-full font-[700] text-[16px] flex'>
                        <spam>ซับเวย์ รีวอร์ด</spam>
                        <div className='flex justify-center items-center ps-2'>
                            <Image src={"/imgs/arrow-green.png"} width={13} height={13} alt='arrow' />
                        </div>
                    </div>
                    <div className='text-[#00491E] w-full font-[500] text-[12px]'>ปลดล็อคสิทธิประโยชน์อีกเพียบด้วยสมาชิก ซับเวย์ รีวอร์ด</div>
                </div>
            </div>
        </div>
    )
}

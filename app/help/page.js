'use client'
import React, { useState } from 'react'
import HeaderOne from '@/components/HeaderOne'
import Image from 'next/image'
import SideNavBar from '@/components/HomeComponents/SideNavBar'
import HelpIcon from "@/public/icon/Help.png"
import PhoneIcon from "@/public/icon/Phone.png"
import ButtonMenu from '@/components/Button/ButtonMenu'
import Link from 'next/link'

function page(){
    const [ isOpenBulgur, setIsOpenBulgur ] = useState(false)
    const ClickBulgur = () =>{
        setIsOpenBulgur(!isOpenBulgur)
    }

    return (
        <div className='bg-zinc-50'>
            {!isOpenBulgur && <HeaderOne CartCount={0} whenClickBulgur={ClickBulgur} />}

            <div className='h-screen' >
                <main className={`w-full h-[139px] bg-[#0b8a45] relative`}>
                    <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute h-[200px] " style={{ objectFit: "contain", overflow: "hidden" }}>
                        <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" className="w-full" width={1000} height={139} />

                    </div>
                </main>
                <div style={{ top: '70px', position: 'absolute' }} className='w-screen flex p-5 '>
                    <div className='bg-[--primary-subway-white] w-full border rounded-[16px] border-[--neutral300] pt-[10px] pb-[10px] ps-[16px] pe-[16px]  h-full overflow-auto hide-scrollbar'>
                        <div className='flex text-[24px] items-center gap-[8px]'>    
                            <Image className="w-[24px] h-[24px]" alt="help-icon" src={HelpIcon}></Image>                        
                            <h1 className='text-[#008938] text-[24px]'>ช่วยเหลือ</h1>
                        </div>
                        <div className='my-5'>                        
                            <ButtonMenu img={PhoneIcon} text={'ศูนย์ช่วยเหลือ ซับเวย์'} help={true}/>
                            <ButtonMenu img={PhoneIcon} text={'ศูนย์ช่วยเหลือแมกซ์ การ์ด'} help={true}/>
                        </div>                        
                    </div>
                </div>
                <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
            </div>
        </div>
    )
}

export default page
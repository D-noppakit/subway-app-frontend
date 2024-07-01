'use client'
import React, { useState } from 'react'
import HeaderOne from '@/components/HeaderOne'
import Image from 'next/image'
import SideNavBar from '@/components/HomeComponents/SideNavBar'
import { useRouter } from 'next/navigation'
import ProfileIcon from "@/public/imgs/user-setting-bolt-nut.png"
import PhoneIcon from "@/public/icon/Phone.png"
import MaxcardIcon from "@/public/icon/CreditCard1StreamlineCore.png"
import MaxpointIcon from "@/public/icon/CoinMax.png"
import MaxmeLogo from "@/public/logo/maxme_logo.png"
import ButtonMenu from '@/components/Button/ButtonMenu'
import Link from 'next/link'

function page(){
    const [ isOpenBulgur, setIsOpenBulgur ] = useState(false)
    const ClickBulgur = () =>{
        setIsOpenBulgur(!isOpenBulgur)
    }

    const [ userDetails, setUserDetails ] = useState({
        username: 'มาคัส แรชฟอร์ด',
        phoneno: '091-874-5284',
        maxcardno: '1234567890',
        maxpoint: 20
    })

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
                            <Image className="w-[24px] h-[24px]" alt="profile-icon" src={ProfileIcon}></Image>                        
                            <h1 className='text-[#008938] text-[24px]'>โปรไฟล์</h1>
                        </div>
                        <div className='mt-5'>
                            <ButtonMenu img={ProfileIcon} text={userDetails.username} gray={true}/>
                            <ButtonMenu img={PhoneIcon} text={userDetails.phoneno} gray={true}/>
                            <ButtonMenu img={MaxcardIcon} text={'Max Card :' + ' ' + userDetails.maxcardno} gray={true}/>
                            <ButtonMenu img={MaxpointIcon} text={'Max Point :' + ' ' + userDetails.maxpoint} gray={true}/>
                        </div>
                        <Link href="/">
                            <button className="my-5 mx-auto w-full h-[66px] flex gap-3 items-center justify-center rounded-[100px] bg-green-600 text-white" type="button">                                
                                <Image src={MaxmeLogo} alt="maxme-logo" width={34} height={34}/>
                                <span>แก้ไขข้อมูลที่แอป Max Me</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
            </div>
        </div>
    )
}

export default page
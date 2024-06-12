'use client'

import React from 'react'
import Image from 'next/image'
import logo1 from "@/public/imgs/timenav.png"
import Plus from "@/public/imgs/plus.png"

import CardListItem from '@/components/Card/CardListItem'
import TittleHeader from '../HomeComponents/TittleHeader'
export default function ContainerListItem({ type = "normal", TagHeadText = "", TagHeadColor = "", title = "", icon = "", listData = [] }) {
    return (
        <div className={'w-full'}>
            <div className='contaner-list-item'>
                <TittleHeader textHeader="ซุป, เมนูทานเล่น และอื่นๆ"/>
                {
                    listData.map((elm) => {
                        console.log("xxx",elm)

                        return (
                            <div div className='list-item' >
                                <CardListItem />
                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
}

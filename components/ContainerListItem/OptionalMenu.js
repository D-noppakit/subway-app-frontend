'use client'
import React from 'react'
import CardSquare from '../Card/CardSquare'
export default function OptionalMenu() {
    const OPTIONAL_RECOMMEND_MENU = []
    for (let i = 0; i < 10; i++) {
        OPTIONAL_RECOMMEND_MENU.push(
            <div key={'orm_' + i} className="w-[120px] flex">
                <CardSquare fullPrice={185} width={"120px"}/>
            </div>
        )
    }
    return (
        <div className="h-[215px] pl-5 gap-[5px] flex flex-col mb-[15px]">
            <span className="text-[#0C8A44] text-16px font-bold">สั่งเพิ่มรับรองว่าถูกใจ</span>
            <div className="flex h-[175px] gap-[12px] overflow-x-scroll w-full pr-5">
                {OPTIONAL_RECOMMEND_MENU}
            </div>
        </div>
    )
}


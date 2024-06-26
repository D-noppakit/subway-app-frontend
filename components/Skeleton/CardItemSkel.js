import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function CardItemSkel() {
    return (
        <div className='w-full'>
            <Skeleton count={1} height={200} borderRadius={24} />
        </div>
    )
}

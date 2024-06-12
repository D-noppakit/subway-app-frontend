import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function BannerSkel() {
    return (
        <div className='mt-4'>
            <Skeleton count={1} height={300}  borderRadius={24} />
        </div>
    )
}

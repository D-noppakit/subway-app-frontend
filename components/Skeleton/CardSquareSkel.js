import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function CardSquareSkel() {
    return (
        <div>
            <Skeleton count={1} height={200}  borderRadius={24} />
        </div>
    )
}

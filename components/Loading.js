import Image from "next/image"

import logWhite from "@/public/imgs/subway-logo-white.png"
export default function Loading() {
    return (
        <div className='absolute w-screen h-screen flex items-center justify-center z-[100] bg-black bg-opacity-50'>
            <span className='text-[50px] text-white'>
                <Image src={logWhite} style={{ objectFit: "contain" }} width={100} height={100} alt="loading" className='animate-spin' />
            </span>
        </div>

    )
}

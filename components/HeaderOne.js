import Image from 'next/image'
import React from 'react'

export default function HeaderOne({ debug, CartCount }) {

  console.log(CartCount)
  const bgClass = "flex w-full h-[76px] justify-between p-3 absolute top-0" + (debug ? "bg-green-500" : '')
  // console.log(debug)
  return (
    <div className={bgClass}>
      <div className='w-[36px] flex justify-center items-center'>
        <Image src={"/imgs/burger.png"} width={100} height={100} alt='1' />
      </div>
      <div className='w-[125px] h-full flex items-center align-middle justify-center'>
        <Image src={"/imgs/subway-logo-home.png"} width={100} height={100} alt='2' />
      </div>
      <div className='w-[36px] flex justify-center items-center relative'>
        {CartCount > 0 ? <NotiCart num={CartCount} /> : <></>}

        <Image src={"/imgs/Cart.png"} width={100} height={100} alt='3' />
      </div>
    </div>
  )
}

function NotiCart({ num }) {
  console.log({ num })
  return (
    <div className='absolute w-[20px] h-[15px] bg-[#FF5C39] rounded-full fs-[1px] top-3 right-0'>
      <div className='text-[10px] text-center text-white'>
        {num}
      </div>
    </div>
  )
}


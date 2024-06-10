import React from 'react'
import Image from 'next/image'
export default function CardWelcomeCustomer({ text1, text2, whenClick, btnText, type }) {
  const Btn = () => {
    if (type === 1) {
      return <button className='w-[90%] p-3 bg-[#F2B700] rounded-[100px]' onClick={whenClick} >{btnText}</button>
    } else {
      return (
        <div className='flex justify-center items-center' >
          <button className='flex justify-center items-center w-[90%] p-3 bg-[#F2B700] rounded-[100px]' onClick={whenClick} >
            <Image src={"/imgs/CartGreen.png"} width={20} height={10}
              alt="Picture of the author" />
            <div className='w-[5px]'></div>
            {btnText}
          </button>
        </div>)
    }
  }
  return (
    <div className='rounded-[30px] bg-green-500 w-[350px] h-[160px] p-[18px] text-center text-white'>
      <div className='text-[24px] w-full'>
        <span> {text1}  {type !== 1 ? <Image style={{ display: 'inline' }} src={"/imgs/smile.png"} width={20} height={10}
          alt="Picture of the author" /> : <></>}</span>

      </div>
      <div>{text2}</div>
      <Btn />
    </div>
  )
}




import Image from 'next/image'
import { Kanit } from '@next/font/google';
const kanit = Kanit({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['thai', 'latin'], // Specify the subsets you need
});
export default function HeaderOne({ debug, CartCount, whenClickBulgur }) {
  const bgClass = "z-20 flex w-full h-[76px] justify-between p-3 absolute top-0" + (debug ? "bg-green-500" : '')
  const handleEventClick = (event) => {
    console.log("Event:", event)
    // คุณสามารถดูค่า event แบบละเอียดด้วย
    // console.log("Event target:", event.target)
    whenClickBulgur(true)
  }
  return (
    <div className={bgClass}>
      <div onClick={handleEventClick} className='w-[36px] flex justify-center items-center'>
        <Image src={"/imgs/burger.png"} width={200} height={200} alt='1' />
      </div>
      <div className='w-[125px] h-full flex items-center align-middle justify-center'>
        <Image src={"/imgs/subway-logo-home.png"} width={200} height={200} alt='subway' />
      </div>
      <div className='w-[30px] flex justify-center items-center relative'>
        {CartCount > 0 ? <NotiCart num={CartCount} /> : <></>}
        <Image src={"/imgs/CartOrange.png"} width={100} height={100} alt='3' />
      </div>
    </div>
  )
}

function NotiCart({ num }) {
  console.log({ num })
  return (
    <div className={`absolute w-[20px] h-[15px] bg-[#FF5C39] rounded-full fs-[1px] top-3 right-0`}>
      <div className='text-[10px] text-center text-white'>
        {num}
      </div>
    </div>
  )
}


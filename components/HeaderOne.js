
import Image from 'next/image'
import { useState, useEffect } from 'react';
import mainHeaderGreen from "@/public/imgs/subway-logo-green.png"
export default function HeaderOne({ debug, CartCount, whenClickBulgur }) {
  const handleEventClick = (event) => {
    // console.log("Event:", event)
    whenClickBulgur(true)
  }
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof document !== 'undefined') {
        const scrolledDown = document.body.scrollTop > 0;
        // console.log(`Scroll position: ${document.body.scrollTop}`);
        setIsScrolledDown(scrolledDown);
      }
    };

    document.body.addEventListener('scroll', handleScroll);
    // Initial check in case the user is already scrolled down
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`z-20 flex w-full h-[76px] justify-between p-3 absolute top-0 ${isScrolledDown && " bg-white"}`}>
      <div onClick={handleEventClick} className='w-[36px] flex justify-center items-center'>
        {!isScrolledDown ? <Image src={"/imgs/burger.png"} width={200} height={200} alt='1' /> : <Image className='p-[5px]' src={"/icon/burger-green.png"} width={200} height={200} alt='2' />}
      </div>
      <div className='w-[125px] h-full flex items-center align-middle justify-center'>
        {!isScrolledDown ? <Image src={"/imgs/subway-logo-home.png"} width={200} height={200} alt='subway' /> : <Image src={mainHeaderGreen} width={200} height={200} alt='subway' />}
      </div>
      <div className='w-[40px] flex justify-center items-center relative'>
        {CartCount > 0 ? <NotiCart num={CartCount} /> : <></>}
        {!isScrolledDown ? <Image className='p-[7px]' src={"/imgs/CartOrange.png"} width={100} height={100} alt='3' /> : <Image src={"/imgs/Shopping-Basket-Card-green.png"} width={100} height={100} alt='3' />}
      </div>
    </div>
  )
}

function NotiCart({ num }) {
  // console.log({ num })
  return (
    <div className={`absolute w-[20px] h-[15px] bg-[#FF5C39] rounded-full fs-[1px] top-3 right-0`}>
      <div className='text-[10px] text-center text-white'>
        {num}
      </div>
    </div>
  )
}


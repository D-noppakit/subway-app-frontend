import Image from 'next/image'

export default function HeaderTwo({ debug, CartCount, Close = () => { console.log("close") } }) {

  console.log(CartCount)
  const bgClass = "flex w-full h-[76px] justify-between p-3 bg-white"
  // console.log(debug)
  return (
    <div className={bgClass}>
      <div className='w-[100px] flex justify-between items-center' onClick={Close}>
        <Image src={"/imgs/headerX.png"} width={40} height={100} alt='1' />
      </div>
      <div className='w-[100px] h-full flex items-center align-middle justify-center'>
        <Image src={"/imgs/Choice-Mark.png"} width={30} height={30} alt='2' />
      </div>
      <div className='w-[100px] flex justify-end items-center relative'>
        <div className='w-[70px] rounded-[100px] border border-[#DFE0E7] h-[45px] flex justify-between items-center ps-2 pe-2'>
          <Image src={"/imgs/Core_Flat.png"} width={20} height={20} alt='1' />
          <div >ไทย</div>
        </div>
      </div>
    </div>
  )
}

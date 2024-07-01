import Image from "next/image"

export default function ButtonMenu({ text, img, gray = false, help = false }) {
    return (
         
        <div className={(gray ? 'bg-[#F8F9FB] text-[#A3A6B7] ' : 'bg-white text-[#008938] ' ) + (help ? 'border rounded-[12px] ' : '' ) + 'mt-3 rounded-lg flex  flex-row justify-between items-center h-[56px] w-full ps-[12px] pe-[12px] pt-[16px] pb-[16px]'}>
            <div className='flex'>
                <div className={"w-50px pe-2 flex justify-center items-center"}>
                    <Image src={img} width={25} height={25} alt='arrow' />
                </div>
                <div className='flex justify-center items-center' >{text}</div>
            </div>
            <div className={gray ? 'hidden' : 'inline-flex'}>
                <Image src={"/imgs/arrow-green.png"} width={15} height={15} alt='arrow' />
            </div>
        </div>
    )
}

import Image from "next/image"

export default function ButtonMenu({ text, img }) {
    return (
        <div className='mt-3 rounded-lg flex  flex-row justify-between items-center h-[56px] w-full bg-white ps-[12px] pe-[12px] pt-[16px] pb-[16px]'>
            <div className='flex'>
                <div className={"w-50px pe-2 flex justify-center items-center"}>
                    <Image src={img} width={25} height={25} alt='arrow' />
                </div>
                <div className='flex justify-center items-center' >{text}</div>
            </div>
            <div>
                <Image src={"/imgs/arrow-green.png"} width={15} height={15} alt='arrow' />
            </div>
        </div>
    )
}

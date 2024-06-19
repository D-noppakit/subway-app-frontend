import next from 'next';
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import ImagePromotionDemo from "@/public/imgs/demo/promotion-mock.png"
import ImageDemo2 from "@/public/imgs/demo/img1.webp"
export default function Promotion({listData = []}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // cssEase: "linear"
    };
    console.log("listDataxxxx",listData)
    return (
        <div className='mt-5 w-full overflow-hidden'>
            <Slider {...settings}>
                {listData.length > 0 ? listData.map((v) => (<>
                    <DrawListPromotion img={v.img} />
                </>)) : null}
            </Slider>
        </div >
    );
}
function DrawListPromotion({ img }) {
    return (
        <div className='border-2 border-neutral300 border rounded-[24px] ms-1 me-1'>
            <Image src={img} style={{ borderRadius: "24px",width: '100%', height: 'auto' }} alt={img} sizes='100vw' width={0} height={0}  />
        </div>
    )
}
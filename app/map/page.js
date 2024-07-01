"use client"
import ButtonCustom from '@/components/Button/ButtonCustom';
import CardBGWhite from '@/components/Card/CardBGWhite';
import React, { useState, useEffect } from 'react';
import Store1 from "@/public/icon/Store-1.png"
import information from "@/public/icon/information-circle--information-frame-info-more-help-point-circle.png"
import Image from 'next/image';
import CardHeaderGreen from '@/components/Card/CardHeaderGreen';
import ImagePhone from "@/public/icon/Phone.png"
import ImageMap1 from "@/public/icon/map1.png"
import { useRouter } from 'next/navigation';
import GMap from '@/components/Map/Map'
import useSWR from 'swr';

const fetcher = (url) => fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}).then(res => res.json());


export default function Map() {
    const router = useRouter();
    const [center, setCenter] = useState({ lat: 0, lng: 0 });

    const [closeInfo, setCloseInfo] = useState(false)
    const mock = Array.from({ length: 10 }, (_, index) => "1")
    const [dataModal, setDataModal] = useState(null)
    const [markers, setMarkers] = useState([]);
    const { data: resultSaka, error } = useSWR(
        'https://maxme-api-uat.maxcard.tech/api/sakainfo',
        fetcher
    );

    const handleClickCard = (index) =>{
        setCloseInfo(true)
        setDataModal(markers[index])
        console.log(dataModal)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCenter({
                    lat: latitude,
                    lng: longitude
                });
                console.log("center", center)
            },
            () => {
                console.error('Error fetching location');
            }
        );
    }, []);

    useEffect(() => {
        if (resultSaka) {
            // const filteredMarkers = resultSaka.result.filter(location => {
            //     if (location.LAT_ID && location.LAT_ID.trim() && location.LONG_ID && location.LONG_ID.trim() && location.ORG_BUSINESS_ID == "f2221f22-4992-e311-9402-0050568975ff") {
            //         const distance = getDistanceFromLatLonInKm(center.lat, center.lng, parseFloat(location.LAT_ID), parseFloat(location.LONG_ID));
            //         return distance <= 10; // ตั้งค่าระยะทางไม่เกิน 100 กิโลเมตร
            //     }
            //     return false;
            // });

            const filteredMarkers = resultSaka.result
                .filter(location => location.LAT_ID && location.LAT_ID.trim() && location.LONG_ID && location.LONG_ID.trim())
                .map(location => {
                    const lat = parseFloat(location.LAT_ID);
                    const lng = parseFloat(location.LONG_ID);
                    const distance = getDistanceFromLatLonInKm(center.lat, center.lng, lat, lng);

                    if (distance <= 10 && location.ORG_BUSINESS_ID === 'f2221f22-4992-e311-9402-0050568975ff') {
                        return {
                            ...location,
                            distance
                        };
                    } else {
                        return null; // Return null if the condition is not met
                    }
                })
                .filter(location => location !== null);


            setMarkers(filteredMarkers.sort((a,b)=>a.distance - b.distance));
            console.log("filteredMarkers", filteredMarkers)
        }

    }, [resultSaka, center]);

    if (error) {
        console.log(error)
        return <div>Failed to load</div>;
    }
    if (!resultSaka || !markers) return <div>Loading...</div>;
    return (
        <div className='h-screen w-screen relative bg-slate-400'>
            <GMap locations={markers} center={center} setCenter={setCenter} />

            <div className='h-77px absolute z-[10] top-0 w-full inline-flex items-center outline-none p-1'>
                <div className='flex justify-between items-center h-[77px] px-4 w-full'>

                    <Image onClick={() => { router.back() }} alt='close' src={"/icon/Close-green.png"} height={45} width={45} style={{ objectFit: "contain" }} />

                    <input className='border border-1 border-[#DFE0E7] rounded-3xl h-[45px] w-5/6 outline-none p-[16px]' placeholder='ค้นหาสาขา' />
                </div>
            </div>
            {/* map in this  */}
            <div className="inline-flex flex-col absolute bg-[#008938] h-2/3 bottom-0 rounded-t-3xl p-4 w-full">
                <div className="flex w-full justify-between items-center">
                    <div className="text-[14px] text-white flex items-center justify-center">เลือกสาขา</div>
                    <div className="w-[140px] h-[50px] py-[6px] px-[12px]">
                        <ButtonCustom btnText={"สาขาใกล้ฉัน"} textSize="14px" img="" type={"secondary"} padding={'10px'} />
                    </div>
                </div>
                <div className="flex flex-col overflow-y-auto max-h-[60vh] hide-scrollbar ">

                    {markers && markers.map((_, index) => {
                        return <CardBGWhite key={index}>
                            <div onClick={()=>handleClickCard(index)}>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center' >
                                        <div className='me-2'><Image src={Store1} width={16} height={16} alt='icon-home' /></div>
                                        <div>{_.SHOP_NAME} </div>
                                    </div>
                                    <div className='flex self-start'>
                                        <Image src={information} width={16} height={16} alt='image information' />
                                    </div>
                                </div>
                                <div className='text-[12px] text-[#72747D] my-3'>
                                    {
                                        // ต่ำแหน่งที่ตั้ง
                                    }
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <div className='flex'>
                                        <div className=' px-2 bg-[#97D700] text-white rounded-2xl me-3'>เปิด</div>
                                        <div className='text-[#A3A6B7] text-[14px] flex justify-center items-center'> ปิดเวลา 19:30 น.</div>
                                    </div>
                                    <div>{parseFloat(_.distance).toFixed(2)} กม.</div>
                                </div>
                            </div>
                        </CardBGWhite>
                    })}

                </div>
            </div>
            {closeInfo && <CardHeaderGreen close={() => setCloseInfo(false)} titleHeader={dataModal.SHOP_NAME}>
                <div className='flex gap-2 flex-col'>
                    <div className='flex'>
                        <div className=' px-2 bg-[#97D700] text-white rounded-2xl me-3'>เปิด</div>
                    </div>
                    <div className='text-[#72747D] text-[12px]'>
                        {
                            // locatioon
                        }
                    </div>
                    <div className='text-[12px]'>{parseFloat(dataModal.distance).toFixed(2)} กม.</div>
                    <div className='text-[12px]'>ทุกวัน 7:00 - 19:30 น.</div>
                    <div className='flex justify-between'>
                        <div className='text-[#008938] text-[14px] flex'>
                            <div className='me-1'>
                                <Image src={ImagePhone} height={18} width={18} alt='phoneimage' />
                            </div>
                            <div></div>
                            ติดต่อร้าน
                        </div>
                        <div className='text-[14px]'>02-343-4322</div>
                    </div>
                    <button className='text-[16px] text-[#008938] flex justify-center items-center bg-[#F8F9FB] w-full h-[56px] rounded-3xl'>
                        <Image className='me-2' src={ImageMap1} width={24} height={24} alt='map' />
                        <span>ดูแผนที่</span>
                    </button>
                </div>
            </CardHeaderGreen>}

        </div>
    );
}


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
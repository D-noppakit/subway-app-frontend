// components/Map.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState, useEffect, useCallback } from 'react';



const containerStyle = {
    width: '100%',
    height: '400px'
};

const mapOptions = {
    disableDefaultUI: true, // ซ่อนเครื่องมือทั้งหมด
    zoomControl: true, // แสดงปุ่มซูม
};



function Map() {
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const [currentPosition, setCurrentPosition] = useState(null);
    const [zoom, setZoom] = useState(15); // เพิ่มสถานะสำหรับการซูม
    const [mapRef, setMapRef] = useState(null); // เพิ่มสถานะสำหรับอ้างอิงแผนที่

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCenter({
                    lat: latitude,
                    lng: longitude
                });
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            },
            () => {
                console.error('Error fetching location');
            }
        );
    }, []);

    useEffect(() => {
        console.log("zoom",zoom)
        if (mapRef) {
            const newCenter = mapRef.getCenter().toJSON(); // ดึงค่าตำแหน่งกึ่งกลาง
            console.log('New Center:', newCenter); // แสดงค่าตำแหน่งกึ่งกลางในคอนโซล
            setCenter({
                lat: newCenter.lat,
                lng: newCenter.lng
            });
        }
    },[mapRef,zoom])

    const onLoad = useCallback((map) => {
        setMapRef(map); // อ้างอิงแผนที่เมื่อโหลดเสร็จ
    }, []);
    
    const onCenterChanged = useCallback(() => {
        if (mapRef) {
            const newCenter = mapRef.getCenter().toJSON(); // ดึงค่าตำแหน่งกึ่งกลาง
            console.log("newCenter",newCenter)
        }

    }, [mapRef]);

    const onZoomChanged = useCallback(() => {
        if (mapRef) {
          const newZoom = mapRef.getZoom(); // ดึงค่าซูมปัจจุบัน
          setZoom(newZoom); // อัพเดตสถานะซูม
        }
      }, [mapRef]);
    const gapikey = process.env.GoogleMapKey
    // const apiKey = process.env.API_KEY;
    return (
        <LoadScript
            googleMapsApiKey={gapikey} // ใส่ API Key ของคุณที่นี่
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                options={mapOptions}
                center={center}
                zoom={zoom} // ใช้ค่าซูมจากสถานะ
                onLoad={onLoad} // เรียกใช้ onLoad เมื่อโหลดแผนที่เสร็จ
                onCenterChanged={onCenterChanged} // เรียกใช้ onCenterChanged เมื่อมีการเปลี่ยนแปลงตำแหน่งกึ่งกลาง
                onZoomChanged={onZoomChanged} // เรียกใช้ onZoomChanged เมื่อมีการเปลี่ยนแปลงซูม
            >
                { /* Child components, such as markers, info windows, etc. */}
                <>
                    {currentPosition && (
                        <Marker position={currentPosition} />
                    )}
                </>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map);
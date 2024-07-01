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



function Map({ locations = [], center, setCenter }) {

    const [currentPosition, setCurrentPosition] = useState(null);
    const [centerGoogle, setCenterGoogle] = useState(null);
    const [zoom, setZoom] = useState(15); // เพิ่มสถานะสำหรับการซูม
    const [mapRef, setMapRef] = useState(null); // เพิ่มสถานะสำหรับอ้างอิงแผนที่
    const [markers, setMarkers] = useState([]);
    const [markerIcon, setMarkerIcon] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
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
        console.log("zoom", zoom)
        if (mapRef && mapRef.getCenter()) {
            const newCenter = mapRef.getCenter().toJSON(); // ดึงค่าตำแหน่งกึ่งกลาง
            console.log('New Center:', newCenter); // แสดงค่าตำแหน่งกึ่งกลางในคอนโซล
            // setCenter(newCenter)
        }
    }, [mapRef, zoom])

    const onLoad = useCallback((map) => {
        setMapRef(map); // อ้างอิงแผนที่เมื่อโหลดเสร็จ
        setMarkerIcon({
            url: '/icon/Pinmap.png',
            scaledSize: new window.google.maps.Size(41, 41)
        })
        console.log("markerIcon", markerIcon)
    }, []);

    const onCenterChanged = useCallback(() => {
        if (mapRef) {
            const newCenter = mapRef.getCenter().toJSON(); // ดึงค่าตำแหน่งกึ่งกลาง
            console.log("newCenter", newCenter)
            setCenter(newCenter)
            setCenterGoogle(newCenter)
            updateMarkers(mapRef.getCenter().toJSON());
        }
    }, [mapRef]);

    const onZoomChanged = useCallback(() => {
        if (mapRef) {
            const newZoom = mapRef.getZoom(); // ดึงค่าซูมปัจจุบัน
            setZoom(newZoom); // อัพเดตสถานะซูม
            updateMarkers(mapRef.getCenter().toJSON());
        }
    }, [mapRef]);

    useEffect(() => {
        console.log("centerGoogle", centerGoogle)
        // setCenter(centerGoogle)

    }, [centerGoogle])

    useEffect(() => {
        const newMarkers = locations.filter(location =>
            location.LAT_ID && location.LAT_ID.trim() && location.LONG_ID && location.LONG_ID.trim()
        ).map(location => ({
            lat: parseFloat(location.LAT_ID),
            lng: parseFloat(location.LONG_ID),
            title: location.SHOP_NAME
        }));

        setMarkers(newMarkers);
    }, [locations]);

    const gapikey = process.env.GoogleMapKey

    const updateMarkers = useCallback((center) => {
        const newMarkers = locations.filter(location =>
            location.LAT_ID && location.LAT_ID.trim() && location.LONG_ID && location.LONG_ID.trim()
        ).map(location => ({
            lat: parseFloat(location.LAT_ID),
            lng: parseFloat(location.LONG_ID),
            title: location.SHOP_NAME
        }));

        setMarkers(newMarkers);
    }, [locations]);

    useEffect(() => {
        updateMarkers(center);
    }, [center, updateMarkers]);

    // const apiKey = process.env.API_KEY;
    return (
        <LoadScript
            googleMapsApiKey={gapikey} // ใส่ API Key ของคุณที่นี่
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                options={mapOptions}
                center={currentPosition}
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

                    {locations.map((location, index) => (
                        (location.LAT_ID && location.LAT_ID.trim()) && (location.LONG_ID && location.LONG_ID.trim()) ? (
                            <Marker
                                key={index}
                                position={{ lat: parseFloat(location.LAT_ID), lng: parseFloat(location.LONG_ID) }}
                                title={location.SHOP_NAME}
                                icon={markerIcon}

                            />
                        ) : null
                    ))}
                </>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map);
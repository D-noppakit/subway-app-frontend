// components/Map.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';



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
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAfiky9TpZMFOiV_x7Kh9OpN0StSoX1Xr8" // ใส่ API Key ของคุณที่นี่
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                options={mapOptions}
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
import { useState } from "react";

export function modalLocation() {
    const [isOpenModalLocation, setIsOpenModalLocation] = useState(false);
    const toggle = () => {
        setIsOpenModalLocation(!isOpenModalLocation);
    };

    return {
        isOpenModalLocation,
        toggle
    };
}
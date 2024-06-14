import React, { useState } from "react";



export default function App() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prevChecked) => !prevChecked);
    };

    return (
        <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
            {/* <span>Toggle is {checked ? "on" : "off"}</span> */}
            <input
                style={{ opacity: 0, position: "absolute" }}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <div
                style={{
                    position: "relative",
                    width: "60px",
                    height: "32px",
                    background: checked ? "green" : "#DFE0E7",
                    borderRadius: "32px",
                    padding: "4px",
                    transition: "background 300ms",
                }}
            >
                <div
                    style={{
                        transition: "transform 300ms",
                        content: "",
                        position: "absolute",
                        width: "25px",
                        height: "25px",
                        borderRadius: "100px",
                        top: "50%",
                        left: "2px",
                        background: "white",
                        transform: checked ? "translate(32px, -50%)" : "translate(0, -50%)",
                    }}
                ></div>
            </div>
        </label>
    );
}

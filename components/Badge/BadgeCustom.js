"use client"
import React from 'react'


export default function BadgeCustom({ tagText = "", tagBgColor = ""}) {
    if (tagBgColor.includes("--")) {
        tagBgColor = `var(${tagBgColor})`
      }
    return (
        <div className='badgeCustom' style={{ top:"7px",right:"7px",height: "24px", padding: "0 8px 0 8px", borderRadius: "100px", gap: "10px", width: "fit-content", backgroundColor: tagBgColor }} >
          <span style={{ fontWeight: "500", lineHeight: "20px", color: 'var(--primary-subway-white)' }}>{tagText}</span>
        </div>
    )
}

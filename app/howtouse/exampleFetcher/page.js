'use client'
import React from 'react'
import useSWR from 'swr';
const fetcher = (url) => fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "shopcode": "S001" }),
}).then(res => res.json());
export default function page() {
    const { data, error, isLoading } = useSWR(
        'http://localhost:3003/api/v1/product/byshop/promotionhotdeal',
        fetcher
    );
    return (
        <div>page</div>
    )
}

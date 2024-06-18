"use client"
import { useEffect } from 'react';
import useSWR from 'swr'

async function fetcherData(url) {
    let res = await fetch(url);
    let data = await res.json();
    data.time = new Date().getTime();
    return data;
}

export default function useClient() {
    const { data, error, isLoading } = useSWR('https://api.coindesk.com/v1/bpi/currentprice.json', fetcherData);
    if (error) return <div>Error loading data</div>;
    if (isLoading) return <div>Loading...</div>;
    
    const ClickOnEvent = async (e) => {
        let res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        let data = await res.json();
        data.time = new Date().getTime();
        return data;
    }
    return (
        <>
            <div>useClient</div>
            <div >{JSON.stringify(data)}</div>
            <button onClick={(e) => ClickOnEvent(e)} className='border border-1 bg-red-600 text-white'>Click</button>
        </>
    );
}

"use server"
async function fetcherData() {
    let res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    let data = await res.json()
    data.time = new Date().getTime()
    return data
}

export default async function useServer() {
    const data = await fetcherData()
    const handleClick = async () => {
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const newData = await res.json();
        newData.time = new Date().getTime();
    };
    return (
        <div>
            <div>useServer</div>
            <div>{JSON.stringify(data)}</div>
            {/* <button className="border-1 p-3 bg-red-500 text-white">Click Me (Server-Side Action)</button> */}
        </div>

    )
}


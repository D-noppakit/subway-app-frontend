
export default function ButtonWhiteBorderGray({ children , height = "32px" , Click =()=>console.log("click") }) {
    return <div onClick={Click} className={`flex h-[${height}] justify-center items-center w-[120px]] border border-1 rounded-3xl relative p-1 text-lg`}>
        {children}
    </div>
}



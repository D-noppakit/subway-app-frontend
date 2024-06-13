
export default function ButtonWhiteBorderGray({ children , height = "32px" }) {
    return <div className={`flex h-[${height}] justify-center items-center w-[120px]] border border-1 rounded-3xl relative p-1 text-lg`}>
        {children}
    </div>
}



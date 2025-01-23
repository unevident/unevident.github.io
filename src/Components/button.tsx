
const SpecialButton = () => {
    return (
        <button  className="relative inline-block group">
            <span className="absolute inset-0 h-full w-full transition duration-400 translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0 bg-orange-700"></span>
            <span className="absolute inset-0 h-full w-full bg-white border border-orange-700 group-hover:border-orange-100"></span>
            <span className=" relative text-white">
                Hover This
            </span>
        </button>
    )
}

export default SpecialButton
function Arrow( direction:string ) {
    if (direction == "ArrowLeft") {
        return <div className="h-0 w-0 border-y-8 border-y-transparent border-r-[24px] border-r-blue-600"/>;
    }
    return <div className="h-0 w-0 ml-12 border-y-8 border-y-transparent border-l-[24px] border-l-blue-600"/>;
}

export default Arrow
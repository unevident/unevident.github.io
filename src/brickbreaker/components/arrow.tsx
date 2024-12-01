function Arrow( direction:string ) {
    if (direction == "ArrowLeft") {
        return <div className="h-0 w-0 mr-24 border-y-[2em] border-y-transparent border-r-[24px] border-r-blue-600"/>;
    }
    return <div className="h-0 w-0 mr-24 border-y-[2em] border-y-transparent border-l-[24px] border-l-blue-600"/>;
}

export default Arrow
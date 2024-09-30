const RightNavbar = () => {

    const date = new Date()

    return (
        <div className="w-2/12 h-full bg-green-600 fixed right-0 top-0 p-3">
            <div>
                <div className="flex justify-between bg-green-500 font-semibold p-2 shadow-md">
                    <h2 className="text-white text-right">{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</h2>
                    <h2>{date.getHours()}:{date.getMinutes()} AM</h2>
                </div>
                <h1 className="text-2xl font-semibold text-white border-b-2 border-white pb-1 mt-4">Bible Reading</h1>
            </div>
        </div>
    )
}

export default RightNavbar

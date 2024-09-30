
const Card = ({children, bg='bg-gray-100'}) => {
    return (
        <div className={`${bg} rounded-md flex flex-col p-5 shadow-md`}>
            {children}
        </div>
    )
}

export default Card

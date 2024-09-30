import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"
const NotFound = () => {
    return <section className="text-center flex flex-col justify-center items-center h-96 w-10/12 p-5 bg-gray-100 mt-16">
        < FaExclamationTriangle className="text-yellow-400 text-6xl mb-4"/>
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does Not exist</p>
        <Link to={'/'} className="bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4">
            Go back
        </Link>
    </section>
}

export default NotFound

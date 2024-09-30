import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='w-10/12 px-5 p-3 bg-green-600 text-white'>
            <div className='flex justify-between items-center gap-5 w-6/12 m-auto'>
                <NavLink to={'/add-soul'} className='text-[20px] font-semibold'>Add New Soul</NavLink>
                <NavLink to={'recent-soul'} className='text-[20px] font-semibold'>Recent Soul</NavLink>
                <NavLink to={'/all-soul'} className='text-[20px] font-semibold'>View Souls</NavLink>
            </div>
        </div>
    )
}

export default Navbar

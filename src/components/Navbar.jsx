import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-[100%] fixed z-50 '>
            <div className='w-full h-[70px] bg-purple-300 flex flex-row justify-between items-center px-[6vw]'>
                <h1 className='text-4xl'>Recipe</h1>
                <ul className='flex flex-row gap-4 text-xl'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

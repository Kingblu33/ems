import React from 'react'
import img from '../images/Ems.jpg'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-600">
            <div className="h-16 px-8 flex items-center justify-center">
                <img onClick={() => { navigate("/") }} className='h-14 w-14 rounded-full' src={img} alt='' />
                {/* <p className="text-white font-bold ">Employee Managment System</p> */}
            </div>
        </div>
    )
}

export default Header
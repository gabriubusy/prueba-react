import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOut, faHome } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const PanelMenu = ({handleLogout, handleMenuOptions}) => {
const user = useSelector(state => state.user[0].user)
  return (
    <div className='flex'>      
        <div className='w-screen h-screen bg-white opacity-40' onClick={handleMenuOptions}></div>
        <div className='absolute bg-white border border-gray-600 rounded-md shadow-xl shadow-gray-600 w-96 flex flex-col justify-center items-center right-0'>
            <div className='flex items-center justify-center bg-black rounded-full text-center w-24 h-24 mt-8'>
                <FontAwesomeIcon icon={faUser} className="text-white text-5xl"/>
            </div>
            <span className='text-2xl font-bold pb-5'>{user}</span>
            <NavLink className={({ isActive }) => isActive ? 'button-menu-reverse text-black text-2xl w-full text-center' : 'button-menu text-center text-2xl w-full'} exact="true" to="/home">Inicio<FontAwesomeIcon icon={faHome} className="px-4"/></NavLink>
            <button className='button-menu text-xl w-full' onClick={handleLogout}>Logout<FontAwesomeIcon icon={faSignOut} className="px-4"/></button>
        </div>
    </div>
  )
}

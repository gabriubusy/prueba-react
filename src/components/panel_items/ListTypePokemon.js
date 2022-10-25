import React from 'react'
import { NavLink } from 'react-router-dom'
import images from '../../assets/image';

export const ListTypePokemon = ({modalActive, results}) => {
  return (
    <>
         <div className='absolute min-w-full left-0 mt-7 h-screen' onClick={ modalActive }>
            <div className='flex justify-center'>
                <div className='animate__animated animate__fadeInDown bg-white w-2/3 h-fit py-5 mr-6 rounded-md border border-red-600 scroll-smooth'>
                <div className='rounded-md flex flex-wrap mx-6 scroll-auto'>
                    {
                    results?.map( res => (
                        <div key={res.url} className="grid grid-cols-2 w-56 md:gap-4 lg:gap-8 xl:gap-6 hover:bg-gray-400 hover:rounded-sm duration-500" onClick={modalActive}>
                            <NavLink className={({ isActive }) =>  isActive ? 'bg-red-600 w-56 rounded-md' : ''}  to={`/pokemon-type/${ res.name }/${res.url.slice(31,38)}`}>
                            <div className="flex cursor-pointer animate__animated animate__fadeIn md:w-16 lg:w-20 xl:w-24 m-3 rounded-md"> 
                                <img className='w-full h-16 rounded-md' src={images[res.url.slice(31,38)]} alt={images[res.url.slice(31,38)]}/>
                                <span className='uppercase text-xl font-bold pt-2 pl-2'>{res.name}</span>
                            </div>
                            </NavLink>
                        </div>
                    ))
                    } 
                </div> 
                </div>
            </div>
        </div>
    </>
  )
}

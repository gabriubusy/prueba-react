import React from 'react'
import { faFacebook, faInstagram, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='text-white text-xl flex py-10 px-14 justify-center'>
            <div className='w-72'>
                <ul>
                    <li className='text-2xl font-bold'>Sobre Nosotros</li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Acerca</a></li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Trabajos</a></li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Terminos</a></li>
                </ul>
            </div>
            <div className='w-72'>
                <ul>
                    <li className='text-2xl font-bold'>Productos</li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Card</a></li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Labs</a></li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>NFT</a></li>
                </ul>
            </div>
            <div className='w-72'>
                <ul>
                    <li className='text-2xl font-bold'>Servicios</li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Descargar</a></li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Jugar</a></li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Comprar</a></li>
                </ul>
            </div>
            <div className='w-72'>
                <ul>
                    <li className='text-2xl font-bold'>Soporte</li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Comisiones</a></li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Centro de Ayuda</a></li>
                    <li> <a className="text-gray-600 hover:text-white duration-500" href='black'>Solicitudes</a></li>
                </ul>
            </div>
            <div className='pt-6'>
                <div>
                    <span className='text-2xl font-bold'>Community</span>
                </div>
                <div>
                    <button className='pr-3 text-gray-600 hover:text-white duration-500'><FontAwesomeIcon icon={faFacebook} /></button>
                    <button className='pr-3 text-gray-600 hover:text-white duration-500'><FontAwesomeIcon icon={faInstagram} /></button>
                    <button className='pr-3 text-gray-600 hover:text-white duration-500'><FontAwesomeIcon icon={faTwitter} /></button>
                    <button className='pr-3 text-gray-600 hover:text-white duration-500'><FontAwesomeIcon icon={faTwitch} /></button>
                </div>
            </div>  
        </div>
        <div className='border-t-2 mx-20 border-red-600'></div>
        <div className='flex justify-center py-10'>
            <span className='text-white text-center'>Gabriel Parra <FontAwesomeIcon icon={faCopyright} /> 2022</span>
        </div>
    </div>
  )
}

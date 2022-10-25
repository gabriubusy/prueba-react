import React from 'react'
import images from '../../assets/image'
import { Footer } from '../home/Footer'

export const TextConfig = ({height, image, positionImage}) => {
  return (
    <>
        <div className=' px-14 pt-12'>
                {height > 100 &&
                    <div className='grid grid-cols-2'>
                        <div className='text-center pt-5 pl-20 w-10/12 animate__animated animate__fadeInLeft'>
                            <h1 className='text-4xl pb-3 font-bold'>¿Qué es Pokémon?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue tristique pellentesque. Nullam dapibus tincidunt aliquam. Cras fringilla justo volutpat, bibendum nulla a, bibendum lorem. Cras non dictum neque, eget venenatis nisl. Donec dapibus egestas tellus, et mollis elit tincidunt eget. Etiam porttitor arcu at velit placerat condimentum. Morbi at mollis enim. Mauris non felis leo. Nam pulvinar feugiat quam, a blandit ex posuere ut. Nunc id felis condimentum arcu consectetur elementum et a elit. Proin dapibus bibendum porta. Maecenas interdum eros lacus, condimentum fringilla ipsum pulvinar in. Mauris iaculis mollis sagittis. Donec rutrum massa id dolor congue, eu pretium dolor scelerisque. Phasellus ut pharetra lectus.</p>
                            <p>Etiam pretium in tellus luctus hendrerit. Mauris ut sollicitudin lorem, gravida hendrerit dolor. Etiam suscipit blandit nisl, ac malesuada massa fermentum id. Etiam id feugiat diam, sit amet euismod nulla. Pellentesque elementum id dui nec porta. Pellentesque et sapien tortor. Nam et orci sed felis venenatis pellentesque eget vel velit. Donec sed ante ultricies, egestas odio ac, blandit elit.</p>
                        </div>
                        <img className="rounded-full animate__animated animate__fadeInRight" src={images['home4']} alt={images['home4']}/>
                    </div>
                }
                <div className='border-t-2 border-red-600 my-10'></div>
                {height > 625 &&
                    <div className='grid grid-cols-2 '>
                        <img className="rounded-full animate__animated animate__fadeInLeft " src={images['home5']} alt={images['home5']}/>
                        <div className='text-center pt-24 pl-20 w-10/12 animate__animated animate__fadeInRight'>
                            <h1 className='text-4xl pb-3 font-bold'>¿Como jugar Pokémon?</h1>
                            <p>Proin congue feugiat risus nec tempus. Donec pharetra consectetur ultricies. Ut vitae ipsum quis massa placerat ultricies ut sed risus. Nullam vel volutpat magna, at aliquam ante. Fusce tincidunt, dui eget auctor pharetra, diam neque placerat orci, in feugiat ligula enim nec nulla. Nunc ut molestie felis. Proin nec ultrices odio, eget varius nulla.</p>
                        </div>
                    </div>
                }
                <div className='border-t-2 border-red-600 my-10'></div>

                {height > 1130 &&
                    <div className='grid grid-cols-2 '>
                        <div className='text-center pt-14 pl-20 w-10/12 animate__animated animate__fadeInLeft'>
                            <h1 className='text-4xl font-bold pb-3'>¿Donde puedes jugar Pokémon?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue tristique pellentesque. Nullam dapibus tincidunt aliquam. Cras fringilla justo volutpat, bibendum nulla a, bibendum lorem. Cras non dictum neque, eget venenatis nisl. Donec dapibus egestas tellus, et mollis elit tincidunt eget. Etiam porttitor arcu at velit placerat condimentum. Morbi at mollis enim. Mauris non felis leo. Nam pulvinar feugiat quam, a blandit ex posuere ut. Nunc id felis condimentum arcu consectetur elementum et a elit. Proin dapibus bibendum porta. Maecenas interdum eros lacus, condimentum fringilla ipsum pulvinar in. Mauris iaculis mollis sagittis. Donec rutrum massa id dolor congue, eu pretium dolor scelerisque. Phasellus ut pharetra lectus.</p>
                        </div>
                        <img className="rounded-full animate__animated animate__fadeInRight" src={images['home6']} alt={images['home6']} />
                    </div>
                }
        </div>
        { height > 1500 && 
            <div className=''>
                <div className='border-t-4 border-red-600 mt-10'></div>
                <div>
                    <Footer />
                </div>
            </div>
        }
    </>
  )
}

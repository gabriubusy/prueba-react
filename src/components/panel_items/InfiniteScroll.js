import React from 'react'
import { Loading } from '../panel_items/Loading'
import InfiniteScroll  from 'react-infinite-scroll-component'
import { NavLink } from 'react-router-dom'

export const InfiniteScrollConfig = ({fetchMoreData, first, pokedexNew}) => {
const validateLength = first?.length === pokedexNew?.length ? 'hidden' : 'flex'
const styleLoading = <Loading styles='my-24' hidden={ validateLength }/>
  return (
    <>
        <InfiniteScroll
          dataLength={first.length}
          style={{ textAlign: 'center'}}
          next={fetchMoreData}
          hasMore={true}
          loader={styleLoading}
        >
          <div className='flex flex-wrap'>
          {
                first?.map( item => (
                    <div key={item.id} className="w-72 flex flex-col text-black m-3">
                        { item?.sprites?.front_default 
                            ?   
                            <NavLink className={({ isActive }) =>  isActive ? 'bg-red-600 w-56 rounded-md' : ''}  to={`/pokemon/${ item.name }`}>
                                <div className='flex justify-center bg-gray-300 hover:bg-red-600 py-3 cursor-pointer rounded-md'>
                                    <img className='w-36' src={item.sprites.front_default} alt="front_default" /> 
                                </div>
                            </NavLink>
                            :   <div className='flex justify-center items-center bg-gray-300 text-black h-44 cursor-pointer rounded-md py-8'>
                                    <span className='text-xl text-center font-semibold'>No se encontro ninguna imagen</span> 
                                </div>
                        }
                        <div className='grid py-2 px-2'>
                            <span className='text-xl font-bold uppercase opacity-50'>Nº{item.id}</span>
                            <span className='text-2xl font-bold uppercase'>{item.name}</span>
                        </div>
                        <div>
                            <div className='capitalize'>
                                { 
                                    item?.types?.map( res => (
                                        <span key={res.type.name} className={`${res.type.name} mx-2 px-5  pb-1 border border-gray-600 rounded-lg`}>{res.type.name}</span>
                                    )) 
                                }
                            </div>
                        </div>
                    </div>
                ))
                
            }
          </div>
        </InfiniteScroll>
    </>
  )
}

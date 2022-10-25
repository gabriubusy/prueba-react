import React, { useEffect, useState } from 'react'
import { InfiniteScrollConfig } from '../panel_items/InfiniteScroll'

export const PokemonCart = ({pokedexNew}) => {
    const [first, setFirst] = useState([])
    const [pokedex, setPokedex] = useState(20)


    const filterPokedex = () => {
        for(let i = pokedex - 20; i < pokedex; i++) {
            if(pokedexNew[i]) {
                setFirst((array) => { 
                    return [...array, pokedexNew[i]]
                }) 
            }
        }
    }

 
    useEffect(() => {
        filterPokedex()
    }, [pokedex])
    
    const fetchMoreData = () => {
        setTimeout(() => {
            setPokedex(pokedex + 20);
        }, 1500);
    };
  return (
    <div className='min-h-screen mt-20'>
        <div className="flex flex-wrap mx-14 pt-10" id="container">
            <InfiniteScrollConfig fetchMoreData={fetchMoreData} first={first} pokedexNew={pokedexNew} />
        </div>
    </div>
  )
}

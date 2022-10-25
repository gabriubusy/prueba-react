import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { useFecth } from '../../hooks/useFetch'
import { PokemonCart } from './PokemonCart'
import { useParams } from 'react-router-dom'
import { Loading } from '../panel_items/Loading'

export const PokemonList = () => {
    const  { id, pokemonType } = useParams()
    const [filter, setFilter] =  useState({})
    const [inputValue, setInputValue] =  useState('')

    const { pokedexList, filterPokedex, loading, stopLoading, getLoading } = useFecth(`https://pokeapi.co/api/v2/type/${id}`)    
    let pokedex = [] 
    useMemo(() => pokedex = pokedexList.pokemon, [pokedexList])

    const [pokedexNew, setPokedexNew] = useState([])
    
   const filterNewPokedex = async() => {
    if(pokedex?.length) {
        setPokedexNew([])
        for(let i = 0; i <= pokedex.length; i++) {
            if(pokedex[i]) {
                const res = await fetch(pokedex[i].pokemon.url)
                const data = await res.json()
                pokedexNew !== pokedex && setPokedexNew((array) => { 
                    return [...array, data]
                }) 
            }
        }
    }
   }

    useMemo(() => {
        filterNewPokedex()
    }, [pokedex])

    useEffect(() => setFilter(filterPokedex(inputValue, pokedexNew)), [inputValue])

    useEffect(() => {
        getLoading()
        stopLoading(false)
    }, [id])

  return (
   <div className='flex items-center flex-col justify-center min-h-screen'>
    {
        loading ? 
        <Loading styles=''/>
        : <PokemonCart pokedexNew={pokedexNew} pokemonType={pokemonType}/>
    }
   </div>
  )
}

import { useState, useEffect } from 'react'

export const useFecth = (url) => {

    const [pokedexList, setPokedexList] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const getPokedex = async() => {
        const res = await fetch(url);
        const data = await res.json();
        setPokedexList(data)
      }
      
      getPokedex()
    }, [url])

    const getTextDesxcription = (item) => {
        if(pokedexList?.flavor_text_entries?.length) return pokedexList?.flavor_text_entries[item].flavor_text
    }
    
    const getTextCategory = () => {
      if(pokedexList?.genera) return pokedexList?.genera[5]?.genus
    }

    const stopLoading = () => {
      return setTimeout( () => setLoading(false), 4000)
    }

    const getLoading = () => {
      setLoading(true)
    }

    const filterPokedex = (type, pokemon) => {
      
      if(pokemon) {
        return pokemon.filter(item => item.name.toLowerCase().includes(type.toLowerCase()))
      }

      return pokedexList?.results?.filter( item => item.name.toLowerCase().includes(type.toLowerCase()))
    }

    return {
      pokedexList,
      loading,
      filterPokedex,
      stopLoading,
      getLoading,
      getTextDesxcription,
      getTextCategory
    }
}
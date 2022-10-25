import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFecth } from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faMarsStroke, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import images from '../../assets/image'
import BarCharts from '../charts/BarCharts'
import { Loading } from '../panel_items/Loading'

export const PokemonDetails = () => {
    const { pokemonName } = useParams()
    const [version, setVersion] = useState(false)
    const { pokedexList, getLoading, loading, stopLoading } = useFecth(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) 
    useEffect(() => {
        getLoading()  
        stopLoading()
    }, [])
      
    const { pokedexList:hola } = useFecth(`https://pokeapi.co/api/v2/pokemon/${ pokedexList.id >= 1153 ? pokedexList.id - 10 : pokedexList.id + 10 }`) 
    console.log(loading)   
    const statsList = pokedexList?.stats?.map( item => item.stat)
    const stats = pokedexList?.stats?.map( item => item.base_stat)
    const { pokedexList:pokemonDescription, getTextDesxcription, getTextCategory} = useFecth(`https://pokeapi.co/api/v2/pokemon-species/${pokedexList?.id}`)   

    const [userData, setUserData] = useState({
        labels: null,
        datasets: []
    })
    // console.log(pokedexList)

    useEffect(() => {
       setUserData({
        labels:  statsList?.map( item => item.name),
        datasets: [{
            label: "Pokemon Details",
            data: stats,
            backgroundColor: [
                '#11FA02',
                '#02FAEF',
                '#FA2802',
                '#FABE02',
                '#9C02FA',
                '#0224FA'
            ],
        }]
       })
    }, [pokedexList])
    
    const descriptionOne = getTextDesxcription(26)
    const descriptionTwo = getTextDesxcription(42)
    const category = getTextCategory()

    const changeDescriptionVersion = (item) => {
        setVersion(!version)
    }

    return (
        <div className='w-full flex items-center flex-col justify-center min-h-screen'>
            {
                !loading ? 
                    <div className='pt-24'>
                        <div>
                            <h1 className='capitalize text-center text-4xl font-bold mb-5 pb-5'>{ pokedexList?.name } Nº { pokedexList?.id }</h1>
                        </div>
                        <div className='flex justify-center items-center'>
                                <div className='grid grid-cols-1'>
                                    <div className='flex'>
                                        <div className='bg-gray-300 rounded-lg flex justify-center w-96 items-center'>
                                            { pokedexList?.sprites?.front_default ? <img className='w-72' src={ !version ? pokedexList?.sprites?.front_default : pokedexList?.sprites?.front_shiny }  /> : <span className='font-bold text-3xl text-center'>No se ha podido encontrar una imagen</span> }
                                        </div>
                                        <div>
                                            <div className='max-w-lg ml-5'>
                                                { !version ? <span>{descriptionOne}</span> : <span>{descriptionTwo}</span> }
                                            </div>
                                            <div className='ml-5 text-xl font-bold'>
                                                Versiones:
                                                <div className='flex py-4'>
                                                    <button disabled={!version} onClick={ changeDescriptionVersion } className={ !version ? 'border-4 border-blue-600 rounded-full p-2' : 'rounded-full p-2' }>
                                                        <img className='w-10' src={ images['pokeballOne'] }/>
                                                    </button>
                                                    <button disabled={version} onClick={ changeDescriptionVersion } className={ version ? 'border-4 border-red-600 rounded-full p-2' : 'rounded-full p-2' }>
                                                        <img className='w-10' src={ images['pokeballTwo'] }/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='bg-black rounded-lg w-11/12 ml-5 p-5 grid grid-cols-2 text-white'>
                                                <div className='flex flex-col text-xl'>
                                                    <span className='text-red-600 font-bold'>Categoria</span>
                                                    <span className='font-bold'>{ category } </span>
                                                </div>
                                                <div className='flex flex-col text-xl'>
                                                    <span className='text-red-600 font-bold'>Estatura</span>
                                                    <span className='font-bold'>{pokedexList?.height / 10} mts</span>
                                                </div>
                                                <div className='flex flex-col text-xl'>
                                                    <span className='text-red-600 font-bold'>Peso</span>
                                                    <span className='font-bold'>{ pokedexList?.weight / 10} Kg</span>
                                                </div>
                                                <div className='flex flex-col text-xl'>
                                                    <span className='text-red-600 font-bold'>Sexo</span>
                                                    <span className=''>
                                                        <FontAwesomeIcon icon={faMars} />
                                                        <FontAwesomeIcon icon={faMarsStroke} />
                                                    </span>
                                                </div>
                                                <div className='flex flex-col text-xl'>
                                                    <span className='text-red-600 font-bold'>Habilidad</span>
                                                    <span className='font-bold'>{ pokedexList?.abilities?.map( item => (
                                                        <div key={item.ability.name} className='flex'>
                                                            <span className='pr-2 text-red-600'><FontAwesomeIcon icon={faInfoCircle} /></span>
                                                            <span className='pr-3'>{item.ability.name}</span>
                                                        </div>
                                                    ))}</span>
                                                </div>
                                                <div className='capitalize'>
                                                <div className='font-bold text-red-600 text-2xl pb-3'>
                                                    Tipo
                                                </div>
                                                { 
                                                    pokedexList?.types?.map( res => (
                                                        <span key={res.type.name} className={`${res.type.name} mx-2 px-8 pb-1 text-2xl rounded-lg`}>{res.type.name}</span>
                                                    )) 
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <div className="pt-5 pb-10">
                                    <div>
                                        <BarCharts chartData={userData}/>
                                    </div>
                                </div>
                            </div>           
                        </div> 
                    </div>
                :  
                <Loading styles='my-5'/>
            }
        </div>
    )
}

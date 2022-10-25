import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components/home/Home'
import { PokemonDetails } from '../components/pokemon/PokemonDetails'
import { PokemonList } from '../components/pokemon/PokemonList'
import { NavBar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <>
        <NavBar/>

        <div className='pt-2'>
            <Routes>
                <Route exact="true" path="/home" element={ <Home /> }></Route>
                <Route exact="true" path="/pokemon-type/:pokemonType/:id" element={ <PokemonList /> }></Route>
                <Route exact="true" path="/pokemon/:pokemonName" element={ <PokemonDetails /> }></Route>
                <Route path="*" element={<Navigate to="/home" />} ></Route>
            </Routes>
        </div>
    </>
  )
}

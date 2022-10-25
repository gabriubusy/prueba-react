import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import images from '../../assets/image';
import { faUser, faList, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useFecth } from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../slice/userSlice';
import { ListTypePokemon } from '../panel_items/ListTypePokemon';
import { PanelMenu } from '../panel_items/PanelMenu';

export const NavBar = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.user)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [modal, setModal] = useState(false)
  const [menu, setMenu] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const { pokedexList } = useFecth('https://pokeapi.co/api/v2/type')
  const { results } = pokedexList || {}

  const modalActive = (e) => {
    e.preventDefault();
    setModal(!modal)
  }

  const handleMenuOptions = (e) => {
    e.preventDefault()
    setMenu(!menu)
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  } 

  const handleLogout = (e) => {
    dispatch( deleteUser() )
    navigate('/login')
  }
  useEffect(() => {
    !state[0] && handleLogout()
  }, [])
  
  return (
    <nav className='bg-black justify-between flex flex-nowrap  items-center w-full max-h-screen fixed z-30'>
        <div className='flex'>
          <Link to="/" className=' text-2xl font-bold'>
            <img className='w-36' src={images['nav-bar']} />
          </Link>
          <div className='px-5 pt-8 text-base'>
              <NavLink className={({ isActive }) => isActive ? 'text-white pb-5 px-3 text-2xl border-b-4 border-red-600 ' : 'text-gray-500 px-3 text-2xl'} exact="true" to="/home"><FontAwesomeIcon icon={faHome}/>Inicio</NavLink>
              <button id="button-menu" onClick={modalActive} className={ pathname.includes('pokemon-type') ? 'text-white pb-5 px-5 text-2xl  border-b-4 border-red-600' : 'text-gray-500 px-5 text-2xl'}>
                <FontAwesomeIcon icon={faList}/>
                <span className="pl-2">Lista de tipos de Pokémon</span>
              </button>
              {
                modal && <ListTypePokemon results={results} modalActive={modalActive} />
              }
          </div>
          <div className="">
              <input onChange={handleInputValue} value={inputValue} type="text" placeholder="Search Pokémon" className="mt-7 w-80 h-10 absolute rounded-full px-5"/> 
              <NavLink to={`/pokemon/${ inputValue.toLowerCase() }`}  className="text-white bg-lime-600 h-10 rounded-full mt-7 absolute pt-2 px-5 ml-72"><FontAwesomeIcon icon={faSearch}/></NavLink>
          </div>
        </div>
        <div className='py-6 px-5 text-2xl'>
          <button className='text-white' onClick={ handleMenuOptions }>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
        <div className='absolute top-24 right-0'>
          { menu && <PanelMenu handleLogout={ handleLogout } handleMenuOptions={ handleMenuOptions }/>}
        </div>
    </nav>
  )
}

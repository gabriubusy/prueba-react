import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { addUser } from '../../slice/userSlice'
import { useDispatch } from 'react-redux';

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const [inputValueText, setInputValueText] = useState('')
  const [inputValuePassword, setInputValuePassword] = useState('')
  const [eye, setEye] = useState(false)
  let navigate = useNavigate()

  const handleInputTextValue = (e) => {
    setInputValueText(e.target.value)
  }

  const handleInputPasswordValue = (e) => {
    setInputValuePassword(e.target.value)
  }

  const handleLogin = (e) => {
    dispatch(addUser({
      password: inputValuePassword,
      user: inputValueText
    }))
    e.preventDefault();
    
    navigate('/')
  }

  const eyePassword = () => {
    setEye( !eye )
  }

  return (
    <>
        <div className='flex items-center justify-center '>
          <img className="min-w-screen z-0" alt="Home" src="https://phantom-marca.unidadeditorial.es/2a6bb9293b020d388e4c1b1d3e640f1a/resize/1320/f/jpg/assets/multimedia/imagenes/2021/02/28/16145196328904.jpg"/>
          <form onSubmit={ handleLogin } className='w-3/12 z-50 fixed p-5 border border-gray-600 rounded-3xl bg-white text-center'>
            <span className='font-bold text-4xl'>Iniciar Sesión</span>
            <div className='pt-2 font-bold text-left'>
              <span className='text-right'>Email</span>
            </div>
            <input type='text' className='w-full py-3 px-5 border border-gray-600 rounded-md' onChange={ handleInputTextValue } />
            <div className='pt-2 font-bold text-left'>
              <span className='text-right'>Contraseña</span>
            </div>
            <div className='border border-gray-600 rounded-md mt-2 flex'>
              <input type={ !eye ? 'password' : 'text'} className='w-full px-5 py-3 rounded-md' onChange={ handleInputPasswordValue }/>
              <FontAwesomeIcon className='p-4 border-l-2 border-gray-600 cursor-pointer text-gray-600' icon={ !eye ? faEye : faEyeSlash} onClick={ eyePassword } />
            </div>
            <button className='py-2 bg-blue-500 text-white w-full text-3xl font-semibold rounded-md mt-5'>Iniciar Sesión</button>
          </form>
        </div>
    </>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
      <div>
        <Routes>
            <Route exact="true" path='/login' element={ <LoginScreen /> } ></Route>
            <Route path='*' element={ <DashboardRoutes /> } ></Route>
        </Routes>
      </div>
  )
}

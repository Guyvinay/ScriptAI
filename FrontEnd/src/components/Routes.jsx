import React from 'react'
import {  Routes, Route } from "react-router-dom";
import { AllRoutes } from './allRoutes';
import { Score } from './Score';
export const RoutesA = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AllRoutes/>}/>
            <Route path='/score' element={<Score/>}/>
        </Routes>
        
    </div>
  )
}

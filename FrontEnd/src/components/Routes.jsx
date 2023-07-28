import React from 'react'
import {  Routes, Route } from "react-router-dom";
import { AllRoutes } from './allRoutes';
import { Score } from './Score';
import { StartInterview } from './StartInterview';
export const RoutesA = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AllRoutes/>}/>
            <Route path='/score' element={<Score/>}/>
            <Route path="/start" element={<StartInterview/>}/>
        </Routes>
        
    </div>
  )
}

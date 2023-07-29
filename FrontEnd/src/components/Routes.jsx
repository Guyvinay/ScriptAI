import React from 'react'
import {  Routes, Route } from "react-router-dom";
import { AllRoutes } from './allRoutes';
import { Score } from './Score';
import VoiceToText from './SpeechToText';
export const RoutesA = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AllRoutes/>}/>
            <Route path='/score' element={<Score/>}/>
            <Route path='/voice' element={<VoiceToText/>}/>
        </Routes>
        
    </div>
  )
}

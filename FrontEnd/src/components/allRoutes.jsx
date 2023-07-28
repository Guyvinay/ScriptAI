import React from 'react'
import { Navbar } from './navbar'
import { Ftop } from './Ftop'
import { Interview } from './interview'
import { Keybenifit } from './keybenifit'
import { Footer } from './footer'

export const AllRoutes = () => {
    return (
        <div>
            <Navbar />
            <Ftop />
            <Interview />
            <Keybenifit />
            <Footer />
        </div>
    )
}

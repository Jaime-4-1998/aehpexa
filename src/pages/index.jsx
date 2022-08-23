import React from 'react'
import Init from '../components/Init'
import Logo from '../components/Logo'
import {Head} from '../components/Logo/Data'

const Home = () => {
    
    return (
        <>
           
            <Init />
            <Logo {...Head} />

        </>
    )
}

export default Home
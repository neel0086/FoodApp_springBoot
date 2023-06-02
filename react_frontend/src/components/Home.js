import React from 'react'
import Hero from "../components/Hero"
import Food from "../components/Food"
import Category from "../components/Category"
import Card from "../components/Card"


function Home() {
    return (
        <div className='pt-24'>
            <Hero />
            <Card />
            <Food />
            <Category />
        </div>
    )
}

export default Home

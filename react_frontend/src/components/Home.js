import React from 'react'
import Hero from "./HomeSection/Hero"
import Food from "./HomeSection/Food"
import Category from "./HomeSection/Category"
import Card from "./HomeSection/Card"


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

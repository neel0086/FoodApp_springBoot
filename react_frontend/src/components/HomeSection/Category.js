import React from 'react'
import { categories } from '../../data/data.js'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='xl:mx-8 lg:mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-8'>
        {categories.map((item, index) => (
          <Link key={index} to={'/menu?category='+item.name.toLowerCase()}>
            <div  className='bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-md cursor-pointer hover:bg-gray-200 '>
              <h2 className='font-bold sm:text-xl'>{item.name}</h2>
              <img className='w-16' src={item.image} alt={item.name} />
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default Category
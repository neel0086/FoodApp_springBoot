import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import FoodService from '../../services/api.js'
import { useLocation } from 'react-router-dom';


function CategoryItem() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const [foods, setFoods] = useState(null);
    const [foodData, setFoodData] = useState(null);
    useEffect(() => {
        const fetchInfo = async () => {
            const data = await FoodService.getAllItems()
            const filteredData =await data.data.filter((item) => {
                return item.category.toLowerCase()== category.toLocaleLowerCase();
            })
            setFoodData(filteredData)
            setFoods(filteredData)
        }
        fetchInfo()
    },[])

    const filterPrice = (sprice,eprice) => {
        setFoods(
            foodData.filter((item) => {
                return sprice<=item.price && item.price<= eprice;
            })
        )
    }
  return (
    <div className='pt-24'>
      <div className='xl:mx-8 lg:m-auto px-4 py-12'>
            <h1 className='uppercase text-orange-600 font-bold text-4xl mb-8 '>
                Burger Delights: Unleash Your Cravings!
            </h1>
            <div className='flex flex-col lg:flex-row '>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex  flex-wrap max-w-[395px] w-full'>
                        <button onClick={() => filterPrice(0,100000)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>All</button>
                        <button onClick={() => filterPrice(201,300)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>201-300</button>
                        <button onClick={() => filterPrice(301,500)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>301-500</button>
                        <button onClick={() => filterPrice(500,10000)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>500+</button>
                    </div>
                </div>
            </div>

            {/* diplay food */}
            <AnimatePresence>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {foods && foods.map((item, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            key={item.id}
                            className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer">
                            <img className='mx-auto p-2  object-cover rounded-t-lg' src={item.foodUrl} alt={item.name} />
                            <div className='flex justify-between px-2 py-4'>
                                <div>
                                    <p className="font-medium leading-4 text-md">{item.companyModel.name}</p>
                                    <p className='invert-0.4 w-11/12 max-h-6 text-ellipsis overflow-hidden line-clamp-2'>{item.description}</p>
                                </div>
                                <p>
                                    <span className='bg-orange-500 text-white p-1 rounded-md'>₹{item.price}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    </div>
  )
}

export default CategoryItem

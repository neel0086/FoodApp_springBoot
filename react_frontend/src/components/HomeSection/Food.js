import React, { useEffect, useState } from 'react'
// import { data } from '../data/data.js'
import { motion, AnimatePresence } from "framer-motion"
import FoodService from '../../services/api.js'
const Food = () => {
    const [foods, setFoods] = useState(null);
    const [foodData, setFoodData] = useState(null);
    useEffect(() => {
        const fetchInfo = async () => {
            const data = await FoodService.getAllItems()
            setFoodData(data.data)
            setFoods(data.data)
        }
        fetchInfo()
    }, [])
    const filterType = (category) => {
        setFoods(
            foodData.filter((item) => {
                return item.category.toLowerCase() === category.toLowerCase();
            })
        )
    }
    const filterPrice = (sprice, eprice) => {
        setFoods(
            foodData.filter((item) => {
                return sprice <= item.price && item.price <= eprice;
            })
        )
    }
    // useEffect(()=>{
    //     FoodService.addItems({
    //         "name":"Garlic bread"

    //     })
    // })

    return (
        <div className='xl:mx-8 lg:m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(foodData)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>All</button>
                        <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Pizza</button>
                        <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Salads</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Chicken</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex  flex-wrap max-w-[395px] w-full'>
                        <button onClick={() => filterPrice(0, 200)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>1-200</button>
                        <button onClick={() => filterPrice(201, 300)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>201-300</button>
                        <button onClick={() => filterPrice(301, 500)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>301-500</button>
                        <button onClick={() => filterPrice(500, 10000)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>500+</button>
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
                                    <p className="mb-2">{item.itemName}</p>
                                    <p className='invert-0.4 w-11/12 max-h-6 text-ellipsis overflow-hidden line-clamp-2'>{item.description}</p>
                                </div>
                                <div>
                                    <p className='mb-2'>
                                        <span className='flex items-center bg-green-500 text-white py-[2px] px-[5px] rounded-md text-[15px]'>{Math.max(3,item.rating).toFixed(1)}<b className='pl-1 text-[12px]'>⭐</b></span>
                                    </p>
                                    <p>
                                        <span className='text-black p-1 rounded-md'>₹{item.price}</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    )
}

export default Food
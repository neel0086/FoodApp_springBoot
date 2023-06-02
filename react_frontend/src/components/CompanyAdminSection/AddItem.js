import React, { useState } from 'react'
import FoodService from '../../services/api.js';

function AddItem() {
    const [foodDetails, setFoodDetails] = useState(
        {
            "id": "",
            "itemName": "",
            "category": "",
            "price": "",
            "description": "",
            "rating": "",
            "discount": "",
            "foodUrl":""
        }
    )
    const [ company_Id, setCompany_Id ] = useState(null)
    const handleChange = (e) => {
        const value = e.target.value;
        setFoodDetails({ ...foodDetails, [e.target.name]: value })
    }

    const handleAddFoodItem = async () => {
        console.log(company_Id)
        FoodService.addItems(foodDetails, company_Id)
    }
    return (
        <div className="py-4 sm:ml-64">
            <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="w-full px-4 md:px-6 text-xl leading-normal">
                    <div className="font-sans">

                        {/* <hr className="border-b border-gray-400" /> */}

                        <div className="py-6">
                            <div className="w-full bg-white shadow-md rounded-lg p-8">
                                <div className="flex justify-between items-center pb-4">
                                    <h2 className="text-2xl font-bold uppercase">Add all information</h2>

                                </div>
                                <div className='pb-4 flex w-full justify-between'>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            URL
                                        </label>
                                        <input
                                            value={foodDetails.foodUrl}
                                            onChange={(e) => handleChange(e)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="foodUrl"
                                            type="text"
                                            name="foodUrl"
                                            placeholder="Enter image url"
                                        />
                                    </div>
                                    <div>
                                        <img className="w-44" src={foodDetails.foodUrl} />
                                    </div>
                                </div>
                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Item Name
                                    </label>
                                    <input
                                        value={foodDetails.itemName}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="itemName"
                                        type="text"
                                        name="itemName"
                                        placeholder="Enter your address"
                                    />
                                </div>
                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Category
                                    </label>
                                    <input
                                        value={foodDetails.category}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="category"
                                        type="text"
                                        name="category"
                                        placeholder="Enter your state"
                                    />
                                </div>
                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Price
                                    </label>
                                    <input
                                        value={foodDetails.price}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="price"
                                        type="text"
                                        name="price"
                                        placeholder="Enter your city"
                                    />
                                </div>

                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Description
                                    </label>
                                    <input
                                        value={foodDetails.description}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="description"
                                        type="text"
                                        name="description"
                                        placeholder="Enter your pincode"
                                    />
                                </div>

                                
                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Discount
                                    </label>
                                    <input
                                        value={foodDetails.discount}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="discount"
                                        type="text"
                                        name="discount"
                                        placeholder="Enter Contact number"
                                    />
                                </div>
                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Comapany Id(Testing purpose only)
                                    </label>
                                    <input
                                        value={company_Id}
                                        onChange={(e) => setCompany_Id(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="company_Id"
                                        type="text"
                                        name="Company_Id"
                                        placeholder="Enter Contact number"
                                    />
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="w-full px-4 md:px-6 text-xl leading-normal pb-4">
                        <button onClick={handleAddFoodItem} className="px-4 mb-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem

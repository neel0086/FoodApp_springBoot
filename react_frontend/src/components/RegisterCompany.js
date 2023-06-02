import React, { useState } from 'react';
import FoodService from "../services/api.js"
import { useNavigate } from 'react-router-dom';

function RegisterCompany() {
    const [cmpnyDetails, setCmpnyDetails] = useState(
        {
            name: "",
            email: "",
            address: "",
            helpLineNumber: "",
            city: "",
            state: "",
            pincode: "",
            startTime: "",
            endTime: "",
            documents: "",
            logoUrl: ""
        }
    )
    const navigate = useNavigate()
    const handleChange = (e) => {
        const value = e.target.value;
        setCmpnyDetails({ ...cmpnyDetails, [e.target.name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        FoodService.addCompany(cmpnyDetails)
        setCmpnyDetails({
            name: "",
            email: "",
            address: "",
            helpLineNumber: "",
            city: "",
            state: "",
            pincode: "",
            startTime: "",
            endTime: "",
            documents: "",
            logoUrl: ""
        })
        navigate('/')

    }
    return (
        <div className="ml-4 bg-gray-100 text-gray-900 tracking-wider leading-normal">

            <div className="container w-full md:max-w-5xl mx-auto pt-20">
                {/* <h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl '>Home</h1> */}

                <div className="w-full px-4 md:px-6 text-xl leading-normal">
                    <div className="font-sans">
                        <div className="py-6">
                            <div className="w-full bg-white shadow-md rounded-lg p-8">
                                <div className="flex justify-between items-center pb-4">
                                    <h2 className="text-2xl font-bold">Company Logo</h2>

                                </div>
                                <div className='flex w-full justify-between'>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            URL
                                        </label>
                                        <input
                                            value={cmpnyDetails.logoUrl}
                                            onChange={(e) => handleChange(e)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="logoUrl"
                                            type="text"
                                            name="logoUrl"
                                            placeholder="Enter image url"
                                        />
                                    </div>
                                    <div>
                                        <img className="w-44" src={cmpnyDetails.logoUrl} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className="border-b border-gray-400" />

                {/* Section-2 */}
                <div className="w-full px-4 md:px-6 text-xl leading-normal">
                    <div className="font-sans">


                        <div className="py-6">
                            <div className="w-full bg-white shadow-md rounded-lg p-8">
                                <div className="flex justify-between items-center pb-4">
                                    <h2 className="text-2xl font-bold">Company Name</h2>

                                </div>
                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        value={cmpnyDetails.name}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Email
                                    </label>
                                    <input
                                        value={cmpnyDetails.email}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder="Enter your email"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* Section-3 */}
                <div className="w-full px-4 md:px-6 text-xl leading-normal">
                    <div className="font-sans">

                        {/* <hr className="border-b border-gray-400" /> */}

                        <div className="py-6">
                            <div className="w-full bg-white shadow-md rounded-lg p-8">
                                <div className="flex justify-between items-center pb-4">
                                    <h2 className="text-2xl font-bold">Company Location</h2>

                                </div>
                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Address
                                    </label>
                                    <input
                                        value={cmpnyDetails.address}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="text"
                                        name="address"
                                        placeholder="Enter your address"
                                    />
                                </div>
                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        State
                                    </label>
                                    <input
                                        value={cmpnyDetails.state}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="state"
                                        type="text"
                                        name="state"
                                        placeholder="Enter your state"
                                    />
                                </div>
                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        City
                                    </label>
                                    <input
                                        value={cmpnyDetails.city}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="city"
                                        type="text"
                                        name="city"
                                        placeholder="Enter your city"
                                    />
                                </div>

                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Pincode
                                    </label>
                                    <input
                                        value={cmpnyDetails.pincode}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="pincode"
                                        type="text"
                                        name="pincode"
                                        placeholder="Enter your pincode"
                                    />
                                </div>

                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        HelpLine Number
                                    </label>
                                    <input
                                        value={cmpnyDetails.helpLineNumber}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="helpLineNumber"
                                        type="text"
                                        name="helpLineNumber"
                                        placeholder="Enter Contact number"
                                    />
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


                {/* Sectuion 4 */}
                <div className="w-full px-4 md:px-6 text-xl leading-normal">
                    <div className="font-sans">

                        {/* <hr className="border-b border-gray-400" /> */}

                        <div className="py-6">
                            <div className="w-full bg-white shadow-md rounded-lg p-8">
                                <div className="flex justify-between items-center pb-4">
                                    <h2 className="text-2xl font-bold">Verification</h2>

                                </div>


                                <div className='pb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Pincode
                                    </label>
                                    <input
                                        value={cmpnyDetails.documents}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="documents"
                                        type="text"
                                        name="documents"
                                        placeholder="Share all documents for verfication"
                                    />
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full px-4 md:px-6 text-xl leading-normal pb-4">
                    <button onClick={handleSubmit} className="px-4 mb-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded">
                        Save
                    </button>
                    <p>Please make sure all details are correct, we will give acess to you after verficaiton process completes</p>
                    <p>All futher communication will be done thorugh email.</p>
                    <p>Verification might take 4-5 working days.</p>
                </div>
            </div>

        </div>
    );
}

export default RegisterCompany;

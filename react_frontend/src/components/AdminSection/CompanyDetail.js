import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import FoodService from "../../services/api.js"

function CompanyDetail() {
    const location = useLocation();
    const { selectedCompany } = location.state
    const navigate = useNavigate()
    const [mssgModal, setMssgModal] = useState(false)

    const handleVerify = async () => {
        FoodService.addVerifiedCompany(selectedCompany)
        navigate("/admin/inbox")
    }
    return (
        <div className="py-4 sm:ml-64">
            {!mssgModal ?
            <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="relative overflow-x-auto">
                    <div className="w-full px-4 md:px-6 text-xl leading-normal">
                        <div className="font-sans">

                            {/* <hr className="border-b border-gray-400" /> */}
                            {/* <button onClick={handleBackClick}>Back to Inbox</button> */}
                            <div className="py-6">
                                <div className="w-full bg-white shadow-md rounded-lg p-8">
                                    <div className="flex justify-between items-center pb-4">
                                        <h2 className="text-2xl font-bold">Company Location</h2>

                                    </div>
                                    <div className='pb-4 flex justify-between w-6/12'>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logoUrl">
                                                Logo Url
                                            </label>
                                            <input
                                                value={selectedCompany.logoUrl}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="logoUrl"
                                                type="text"
                                                name="logoUrl"
                                                readonly
                                            />
                                        </div>
                                        <img className="w-32" src={selectedCompany.logoUrl} />
                                    </div>
                                    <div className='pb-4'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            value={selectedCompany.name}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            name="name"
                                            readonly
                                        />
                                    </div>
                                    <div className='pb-4'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            value={selectedCompany.email}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="text"
                                            name="email"
                                            readonly
                                        />
                                    </div>

                                    <div className='pb-4'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                            Address
                                        </label>
                                        <input
                                            value={selectedCompany.address}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="address"
                                            type="text"
                                            name="address"
                                            readonly
                                        />
                                    </div>
                                    <div className='pb-4'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                                            State
                                        </label>
                                        <input
                                            value={selectedCompany.state}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="state"
                                            type="text"
                                            name="state"
                                            readonly
                                        />
                                    </div>
                                    <div className='pb-4'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                            City
                                        </label>
                                        <input
                                            value={selectedCompany.city}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="city"
                                            type="text"
                                            name="city"
                                            readonly
                                        />
                                    </div>

                                    <div className='pb-4'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">
                                            Pincode
                                        </label>
                                        <input
                                            value={selectedCompany.pincode}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="pincode"
                                            type="text"
                                            name="pincode"
                                            readonly
                                        />
                                    </div>

                                    <div className='pb-4'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="helpLineNumber">
                                            HelpLine Number
                                        </label>
                                        <input
                                            value={selectedCompany.helpLineNumber}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="helpLineNumber"
                                            type="text"
                                            name="helpLineNumber"
                                            readonly
                                        />
                                    </div>

                                    <div className='pb-4'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                                            Documents
                                        </label>
                                        <p><a href={selectedCompany.documents} /></p>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:px-6 text-xl leading-normal pb-4">
                    <button onClick={() => setMssgModal(true)} className="px-4 mb-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded">
                        Verify
                    </button>
                </div>
            </div>
            :
            <div className={`absolute flex justify-center items-center z-50 ${mssgModal ? "block" : 'hidden'} p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}>
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-whitesmoke rounded-lg shadow dark:bg-gray-700">
                        <button onClick={(e) => setMssgModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Confirm Verification ?</h3>
                            <button onClick={handleVerify} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Yes, I'm sure
                            </button>
                            <button onClick={(e) => setMssgModal(false)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            }

        </div>
    )
}

export default CompanyDetail

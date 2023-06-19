import React, { useEffect, useState } from 'react';
import FoodService from '../../services/api.js';
import CompanyDetail from './CompanyDetail.js';
import { useNavigate } from 'react-router-dom';

function Users() {
    const [verifiedCompany, setVerifiedCompany] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(false);

    useEffect(() => {
        const fetchInfo = async () => {
            const data = await FoodService.getAllVerifiedCompany();
            setVerifiedCompany(data);
        };
        fetchInfo();
    }, []);
    const navigate = useNavigate();
    const handleRowClick = (mail) => {
        navigate("/admin/Users/" + mail.id, { state: { selectedCompany: mail } });
    };

    return (
        <div className="py-4 sm:ml-64">
            <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">


                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    Comapany
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Location
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact Number
                                </th>
                            </tr>
                        </thead>
                        <tbody>{verifiedCompany && 
                            verifiedCompany.map((item) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="w-12 rounded-full" src={item.logoUrl} alt="Jese image" />
                                            <div className="pl-3">
                                                <div className="text-base font-semibold">{item.name}</div>
                                                <div className="font-normal text-gray-500">{item.email}</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.city+","+item.state}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.helpLineNumber}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;

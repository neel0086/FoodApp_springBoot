import React, { useState } from 'react'
import EmployeeService from '../services/api.js'
import { useNavigate, useParams } from 'react-router-dom';

function EditEmployee() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: "",
        fName: "",
        lName: "",
        emailId: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };
    const updateEmployee = async () => {
        try {
            const response = await EmployeeService.createEmployee(employee,id)
            console.log(response)
            navigate("/employee_list");
        }
        catch (e) {
            console.log(e)
        }
        
    }
  return (
    <div className='h-screen w-screen text-Roboto overflow-x-hidden  pb-40 mt-5 bg-gradient-to-tr from-neutral-700 via-neutral-700 to-neutral-700'>
            <section className="w-100 mx-4 p-6 mx-auto flex justify-center rounded-md shadow-md dark:bg-gray-800 mt-20">
                <div class="w-full max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="fname">
                                First Name
                            </label>
                            <input
                                value={employee.firstName}
                                id="fname"
                                type="text"
                                placeholder="fname"
                                name="fname"
                                onChange={(e) => handleChange(e)}
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="fname">
                                Last Name
                            </label>
                            <input
                                value={employee.lastName}
                                id="lname"
                                type="text"
                                placeholder="lname"
                                name="lname"
                                onChange={(e) => handleChange(e)}
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input
                                value={employee.emailId}
                                id="email"
                                type="email"
                                placeholder="Enter Email"
                                name="emailId"
                                onChange={(e) => handleChange(e)}
                                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <p class="text-red-500 text-xs italic">Please choose a Email</p>
                        </div>

                        <div class="flex items-center justify-between">
                            <button
                                onClick={updateEmployee}
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Save
                            </button>

                        </div>
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;2023. All rights reserved.
                    </p>
                </div>
            </section>
        </div>
  )
}

export default EditEmployee

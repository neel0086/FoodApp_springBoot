import React, { useEffect, useState } from 'react'
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function EmployeesList() {
  const [employees, setEmployees] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      //   setLoading(true);
      try {
        const response = await api.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      //   setLoading(false);
    };
    fetchData();
  }, []);

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/edit_employee/${id}`);
  };

  return (
    <div className='h-screen w-screen text-Roboto overflow-x-hidden  pb-40 mt-5 bg-gradient-to-tr from-neutral-700 via-neutral-700 to-neutral-700'>
      <section className="w-100 mx-4 p-6 mx-auto flex justify-center rounded-md shadow-md dark:bg-gray-800 mt-20">
        <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {employees != null && employees.map((employee) => {
                return (
                  <tr class="bg-white text-black font-Roboto text-lg border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                    <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-white">
                      {employee.id}
                    </th>
                    <td class="px-6 py-4">
                      {employee.fname}
                    </td>
                    <td class="px-6 py-4">
                      {employee.lname}
                    </td>
                    <td class="px-6 py-4">
                      {employee.emailId}
                    </td>
                    <td onClick={(e)=>editEmployee(e,employee.id)} class="px-6 py-4 text-right">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
        {employees ? console.log(employees) : ''}
      </section>
    </div>
  )
}

export default EmployeesList

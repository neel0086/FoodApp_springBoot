import React, { useEffect, useState } from 'react';
import FoodService from '../../services/api.js';
import CompanyDetail from './CompanyDetail.js';
import { useNavigate } from 'react-router-dom';

function Inbox() {
  const [inboxMail, setInboxMails] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(false);

  useEffect(() => {
    console.log("Hello ")
    const fetchInfo = async () => {
      const data = await FoodService.getAllCompany();
      setInboxMails(data);
      console.log(data);
    };
    fetchInfo();
  }, []);
  const navigate = useNavigate();
  const handleRowClick = (mail) => {
    console.log(mail)
    navigate("/admin/inbox/"+mail.id,{state:{selectedCompany:mail}});
  };

  return (
    <div className="py-4 sm:ml-64">
      <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="relative overflow-x-auto">

          <table className="w-full text-left dark:text-gray-400">
            <thead className="text-md text-black uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  Company Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {inboxMail.map((mail, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(mail)}
                  className="bg-white hover:bg-gray-200 cursor-pointer"
                >
                  <td className="px-6 py-4">{mail.name}</td>
                  <td className="px-6 py-4">{mail.address}</td>
                  <td className="px-6 py-4">{mail.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inbox;

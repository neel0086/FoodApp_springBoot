import React, { useEffect, useState } from 'react'
import StatusCard from './StatusCard'
import SalesOverview from './SalesOverview'
import FoodService from '../../services/api.js';


function Dashboard() {
  const [adminData, setAdminData] = useState(null)
  const [productData,setProductData] = useState(null)
  const [companyData,setCompanyData] = useState(null)

  useEffect(() => {
    const getStats = async () => {
      var dateObj = new Date();
      var options = { timeZone: 'Asia/Kolkata', day: 'numeric', month: 'numeric', year: 'numeric' };
      var newdate = dateObj.toLocaleString('en-US', options);
      var data = await FoodService.getAllAdminStats(newdate);

      setAdminData(data)
      console.log(data)

      var salesModel = data.salesModel
      const len = salesModel.length

      //No of products launched
      console.log(((salesModel[len - 1].noOfSales - salesModel[len - 2].noOfSales) * 100) / salesModel[len - 2].noOfSales)
      setProductData(len > 1 ? ((salesModel[len - 1].noOfSales - salesModel[len - 2].noOfSales) * 100) / salesModel[len - 2].noOfSales+"%": "0%")

      //No of company Registered
      console.log(((salesModel[len - 1].noOfCompany - salesModel[len - 2].noOfCompany) * 100) / salesModel[len - 2].noOfCompany)
      setCompanyData(len > 1 ? ((salesModel[len - 1].noOfCompany - salesModel[len - 2].noOfCompany) * 100) / salesModel[len - 2].noOfCompany+"%": "0%")
    }
    getStats()

  }, [])
  
  return (
    <div className="bg-[#f8f9fa] xl:ml-[16.1rem]  py-4 sm:ml-64">
      <div className=" p-2  rounded-lg ">
        <div class="w-full px-6 py-6 mx-auto">
          {
            productData &&
            <div class="flex flex-wrap -mx-3">
              <StatusCard heading={"Todays's Money"} amount={"53,0000"} percent={"55%"} />
              <StatusCard heading={"Leading Domino's"} amount={"53,0000"} percent={""} />
              <StatusCard heading={"New Client"} amount={adminData.salesModel[adminData.salesModel.length-1].noOfCompany} percent={companyData} />
              <StatusCard heading={"New Products"} amount={adminData.salesModel[adminData.salesModel.length-1].noOfSales} percent={productData} />

            </div>
          }
          <div class="flex flex-wrap mt-6 -mx-3">

            <SalesOverview />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

import React, { useEffect } from 'react'
import StatusCard from './StatusCard'
import SalesOverview from './SalesOverview'
import FoodService from '../../services/api.js';


function Dashboard() {
  useEffect(()=>{
    FoodService.getAllAdminStats();
  })
  return (
    <div className="bg-[#f8f9fa] xl:ml-[16.1rem]  py-4 sm:ml-64">
      <div className=" p-2  rounded-lg ">
        <div class="w-full px-6 py-6 mx-auto">
          <div class="flex flex-wrap -mx-3">
            <StatusCard heading={"Todays's Money"} amount={"53,0000"} percent={"55%"} />
            <StatusCard heading={"Leading Domino's"} amount={"53,0000"} percent={""} />
            <StatusCard heading={"New Client"} amount={"100"} percent={"2%"} />
            <StatusCard heading={"New Products"} amount={"100"} percent={"2%"} />

          </div>
          <div class="flex flex-wrap mt-6 -mx-3">

            <SalesOverview />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

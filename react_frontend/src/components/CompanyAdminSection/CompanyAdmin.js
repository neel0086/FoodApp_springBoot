import React, { useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import CompanySidebar from './CompanySidebar'

function CompanyAdmin() {
    return (
        <div className='pt-20'>
                <CompanySidebar />
                <Outlet />
        </div>
    )
}

export default CompanyAdmin

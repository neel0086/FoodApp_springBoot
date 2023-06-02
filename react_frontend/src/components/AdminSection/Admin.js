import React, { useContext, useState } from 'react'
import Inbox from './Inbox'
import RegisterCompany from '../RegisterCompany'
import Sidebar from '../Sidebar'
import SidebarProvider, { SidebarContext } from '../../provider/SidebarProvider'
import { Outlet, useNavigate } from 'react-router-dom'

function Admin() {
    const {sidebarPage,setSidebarPage} = useContext(SidebarContext);
    const navigate = useNavigate()

    return (
        <div className='pt-20'>
                <Sidebar />
                <Outlet />
        </div>
    )
}

export default Admin

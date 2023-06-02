import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet} from 'react-router-dom'

function Admin() {
    return (
        <div className='pt-20'>
                <Sidebar />
                <Outlet />
        </div>
    )
}

export default Admin

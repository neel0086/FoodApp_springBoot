import React from 'react'

import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegisterCompany from './components/RegisterCompany';
import Admin from './components/AdminSection/Admin';
import CompanyAdmin from './components/CompanyAdmin';
import SidebarProvider from './provider/SidebarProvider';
import Inbox from './components/AdminSection/Inbox';
import Sidebar from './components/Sidebar';
import Dashboard from './components/AdminSection/Dashboard';
import CompanyDetail from './components/AdminSection/CompanyDetail';


const App = () => {
  return (
    <SidebarProvider>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register_company' element={<RegisterCompany />} />
            <Route path='/company_admin' element={<CompanyAdmin />} />

            {/* <Route path='/admin' element={<Admin />} /> */}
            {/* <Route path='/admin/inbox' element={<Inbox />} /> */}
            <Route path="admin" element={<Admin />}>
              <Route path="inbox" element={<Inbox />} />
              <Route path="inbox/:id" element={<CompanyDetail />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>


            {/* <Route path='/loading' element={<Loading />} /> */}
          </Routes>
          <Footer />
        </Router>

      </>
    </SidebarProvider>

  )
}

export default App
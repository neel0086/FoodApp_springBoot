import React, { useContext, useEffect, useState } from 'react'

import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegisterCompany from './components/RegisterCompany';
import Admin from './components/AdminSection/Admin';
import CompanyAdmin from './components/CompanyAdminSection/CompanyAdmin';
import Inbox from './components/AdminSection/Inbox';
import Dashboard from './components/AdminSection/Dashboard';
import CompanyDetail from './components/AdminSection/CompanyDetail';
import AddItem from './components/CompanyAdminSection/AddItem';
import Login from './components/Auth/Login';
import CategoryItem from './components/HomeSection/CategoryItem';
import Users from './components/AdminSection/Users';
import Register from './components/Auth/Register';
import { UserContext } from './provider/UserProvider';
import FoodService from './services/api.js'



const App = () => {
  const { userRole, setUserRole } = useContext(UserContext);
  const [roleAdmin, setRoleAdmin] = useState(false)
  useEffect(() => {
    const checkUser = async () => {


      const role = await FoodService.getUserRole()
      setUserRole(role)
      Array.from(userRole).forEach((r, idx) => {
        console.log(r)

        if (r == "ROLE_ADMIN") {
          setRoleAdmin(true)
          return 0;
        }
      })
    }
    checkUser()
  }, [])
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register_company' element={<RegisterCompany />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/company_admin' element={<CompanyAdmin />} >
            <Route path="add_item" element={<AddItem />} />

          </Route>
          <Route path="/menu" element={<CategoryItem />} />


          {/* <Route path='/admin' element={<Admin />} /> */}
          {/* <Route path='/admin/inbox' element={<Inbox />} /> */}
          {roleAdmin ?
            <Route path="admin" element={<Admin />}>
              <Route path="inbox" element={<Inbox />} />
              <Route path="users" element={<Users />} />
              {/* <Route path="inbox" element={<Product />} /> */}


              <Route path="inbox/:id" element={<CompanyDetail />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route> : " "
          }

          {/* <Route path='/loading' element={<Loading />} /> */}
        </Routes>
        <Footer />
      </Router>

    </>

  )
}

export default App
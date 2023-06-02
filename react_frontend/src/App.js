import React from 'react'

import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegisterCompany from './components/RegisterCompany';
import Admin from './components/Admin';
import CompanyAdmin from './components/CompanyAdmin';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register_company' element={<RegisterCompany />} />
          <Route path='/company_admin' element={<CompanyAdmin />} />
          <Route path='/admin' element={<Admin />} />



          {/* <Route path='/loading' element={<Loading />} /> */}
        </Routes>
        <Footer />
      </Router>
      
    </>
  )
}

export default App
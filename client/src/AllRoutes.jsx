import React from 'react'
import { Route, Routes } from 'react-router'
import Auth from './pages/auth/auth'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/auth' element={<Auth/>}></Route>
    </Routes>
  )
}

export default AllRoutes
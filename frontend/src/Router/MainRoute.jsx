import AdminLayout from '@/components/admin-view/layout'
import AuthLayout from '@/components/auth/layout'
import CheckAuth from '@/components/common/check-auth'
import ShoppingLayout from '@/components/shopping-view/layout'
import AdminDashboard from '@/pages/admin-view/dashboard'
import AdminFeatures from '@/pages/admin-view/features'
import AdminOrders from '@/pages/admin-view/orders'
import AdminProducts from '@/pages/admin-view/products'
import AuthLogin from '@/pages/auth/Login'
import AuthRegister from '@/pages/auth/Register'
import NotFound from '@/pages/NotFound'
import ShoppingAccount from '@/pages/shopping-view/account'
import ShoppingCheckout from '@/pages/shopping-view/checkout'
import ShoppingHome from '@/pages/shopping-view/home'
import ShoppingListing from '@/pages/shopping-view/listing'
import UnauthPage from '@/pages/unauthpage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const MainRoute = ({isAuthenticated,user}) => {

  

  return (
    <Routes>
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} >
            <AuthLayout/>
          </CheckAuth>
          }>
        <Route path='login' element={<AuthLogin/>}  /> 
        <Route path='register' element={<AuthRegister/>}  /> 
        </Route> 
        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
            
            } >
            
          <Route path='dashboard' element={<AdminDashboard/>} />
          <Route path='features' element={<AdminFeatures/>} />
          <Route path='orders' element={<AdminOrders/>} />
          <Route path='products' element={<AdminProducts/>} />
        </Route>
        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>
          
          }>
         <Route path='home' element={<ShoppingHome/>}/> 
         <Route path='account' element={<ShoppingAccount/>}/>
         <Route path='listing' element={<ShoppingListing/>}/>
         <Route path='checkout' element={<ShoppingCheckout/>}/>
        </Route>

        <Route path='*' element={<NotFound/>} />
        <Route path='unauth-page' element={<UnauthPage/>}/>
    </Routes>
  )
}

export default MainRoute
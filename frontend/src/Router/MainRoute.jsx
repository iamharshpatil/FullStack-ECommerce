import AdminLayout from '@/components/admin-view/layout'
import AuthLayout from '@/components/auth/layout'
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
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/auth' element={<AuthLayout/>}>
        <Route path='login' element={<AuthLogin/>}  /> 
        <Route path='register' element={<AuthRegister/>}  /> 
        </Route> 
        <Route path='/admin' element={<AdminLayout/>} >
          <Route path='dashboard' element={<AdminDashboard/>} />
          <Route path='features' element={<AdminFeatures/>} />
          <Route path='orders' element={<AdminOrders/>} />
          <Route path='products' element={<AdminProducts/>} />
        </Route>
        <Route path='/shop' element={<ShoppingLayout/>}>
         <Route path='home' element={<ShoppingHome/>}/> 
         <Route path='account' element={<ShoppingAccount/>}/>
         <Route path='listing' element={<ShoppingListing/>}/>
         <Route path='checkout' element={<ShoppingCheckout/>}/>
        </Route>

        <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default MainRoute
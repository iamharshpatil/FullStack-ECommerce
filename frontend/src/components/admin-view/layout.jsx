import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './sidebar'
import AdminHeader from './header'

const AdminLayout = () => {
  return (
    <div>
        <div>
            <AdminSidebar/>
        </div>
        <div>
            <AdminHeader/>
        </div>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout
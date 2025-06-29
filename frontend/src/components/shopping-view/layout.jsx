import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from './header'

const ShoppingLayout = () => {
  return (
    <div>
        <div>
          <ShoppingHeader/>
        </div>
        <main>
            <Outlet/>
        </main>

    </div>
  )
}

export default ShoppingLayout
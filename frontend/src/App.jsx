import React from 'react'
import MainRoute from './Router/MainRoute'
import { useSelector } from 'react-redux';

const App = () => {

    const  {user , isAuthenticated} =  useSelector(state => state.auth)
    console.log(user, isAuthenticated);
    
  return (
    <div>
      <MainRoute isAuthenticated={isAuthenticated} user={user} />
    </div>
  )
}

export default App
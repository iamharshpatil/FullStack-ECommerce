import React from 'react'
import MainRoute from './Router/MainRoute'

const App = () => {
  const isAuthenticated = false;
    const user = null
  return (
    <div>
      <MainRoute isAuthenticated={isAuthenticated} user={user} />
    </div>
  )
}

export default App
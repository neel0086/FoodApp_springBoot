import React, { useState } from 'react'

export const UserContext = React.createContext()
function UserProvider({children}) {
  const [userRole,setUserRole] = useState({})
  return (
    <UserContext.Provider value={{
      userRole,
      setUserRole,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

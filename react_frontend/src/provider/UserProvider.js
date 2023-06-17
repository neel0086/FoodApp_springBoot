import React, { useState } from 'react'

export const UserContext = React.createContext()
function UserProvider({children}) {
  const [userProvider,setUserProvider] = useState(false)
  return (
    <UserContext.Provider value={{
      userProvider,
      setUserProvider,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

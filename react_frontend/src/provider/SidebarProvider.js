import React, { useState } from 'react'

export const SidebarContext = React.createContext()
function SidebarProvider({children}) {
  const [sidebarPage,setSidebarPage] = useState("")
  return (
    <SidebarContext.Provider value={{
      sidebarPage,
      setSidebarPage,
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider

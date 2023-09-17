import React from "react"
import Navbar from "../navbar/navbar"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return(
    <>
      <div>
        <Navbar />
      </div>
      <main style={{marginTop: '80px'}}>
        {children}
      </main>
    </>
  )
}

export default Layout;
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Routers from '../Routes/Routers'
const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Routers />
        </main>
        <Footer />
    </div>
  )
}

export default Layout
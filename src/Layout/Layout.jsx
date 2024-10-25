import React from 'react'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import Routers from '../Routes/Routers.jsx'
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
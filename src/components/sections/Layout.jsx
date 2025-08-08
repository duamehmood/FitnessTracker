import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Outlet className="felx grow"/>
        <Footer/>
    </div>
  )
}

export default Layout

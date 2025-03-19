import React from 'react'
import Home from './home'
import Header from '@/components/layouts/header.layout'
import Footer from '@/components/layouts/footer.layout'
import HotelDetails from './hotel-details'
import { SignInPage } from './auth'
import { SignUpPage } from './auth'
const App = () => {
  return (
    <div>
        <Header/>
        <Home/>
        {/* <HotelDetails /> */}
        {/* <AuthPage /> */}
        {/* <SignInPage /> */}
        {/* <SignUpPage /> */}
        <Footer/>
    </div>
  )
}

export default App
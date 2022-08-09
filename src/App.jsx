import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/experience/experience'
import MyServices from './components/myservices/myservices'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonials/testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <MyServices/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        
    </>
  )
}

export default App
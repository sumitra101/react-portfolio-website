import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/788af61d-662d-4caf-9d14-4487f3465e20-removebg-preview (Custom).png'
import HeaderSocial from './headerSocials'

const header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Sumitra Khadka</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
            <HeaderSocial/>

            <div className='me'>
                 <img src={ME} alt="me"></img>
            </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default header
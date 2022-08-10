import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='' target='_blank'><BsLinkedin/></a>
        <a href='' target='_blank'><FaGithub/></a>
        <a href='' target='_blank'></a>
    </div>

  )
}

export default headerSocials
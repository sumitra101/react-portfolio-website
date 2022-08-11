import React from 'react'
import './about.css'
import ME from '../../assets/97230161_601938723753523_7735945143361994752_n.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt="About Image" />
                </div>
            </div>
            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>4+ Years Working</small>
                    </article>
                    <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small>10+ Worldwide</small>
                    </article><article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>10+ Completed Projects</small>
                    </article>
                </div>

                <p>
                I am a full-stack developer having more than 4 year of working experience. I have worked on various stack such as Angular, .Net, SQL, Azure. I have an experience working on agile methodology. I have also worked on page speed optimization for more than 3 years.
                </p>

                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
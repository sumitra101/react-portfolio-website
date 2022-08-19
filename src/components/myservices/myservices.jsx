import React from 'react';
import './myservices.css';
import { BiCheck } from 'react-icons/bi';

const myservices = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className='container services__container'>
                {/* <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Page Speed Optimization</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Page Speed Optimization</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Page Speed Optimization</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Page Speed Optimization</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Page Speed Optimization</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Page Speed Optimization</p>
                        </li>
                    </ul>
                </article> */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Full-Stack Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Build an Enterprise Application</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Authentication and Authorization</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Api Development using Rest Api</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Best Architecture Practice</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Securely Handling Errors and Logging Security Events</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Implement custom Middleware</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Improving the Design of Existing Software</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Cloud Services</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Deploying application into cloud platform(Azure,Aws)</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Implement Azure/Aws Services in your project.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>CI/CD pipeline setup</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>SignalR Implementation </p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Page Speed Optimization</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>90+ Google PageSpeed Insights</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Achieve "A" Grade on GTmetrix</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>24 hours delivery</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Load your website under 2 sec</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Image optimizations</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Minify HTML/CSS/JavaScript</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Search Engine Optimization</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>On-Page SEO</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Off-page SEO</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Backlinks building</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Local SEO</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Keyword research</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Full website SEO Audit</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default myservices;

import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/bizvue.PNG';
import IMG2 from '../../assets/qkly.PNG';
import IMG3 from '../../assets/seo-tool.PNG';
import IMG4 from '../../assets/greenweb.PNG';
import IMG5 from '../../assets/concinnity.PNG';
import IMG6 from '../../assets/genesis-block.PNG';
import IMG7 from '../../assets/portfolio.PNG';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Bizvue | Project Management',
        github: '',
        demo: 'https://bizvue.io/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Qkly | Freelancing Platform',
        github: '',
        demo: 'http://qkly.io/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'SEO Tool',
        github: '',
        demo: 'http://yourportal.site/'
    },
    {
        id: 4,
        image: IMG7,
        title: 'Portfolio',
        github: 'https://github.com/sumitra101/react-portfolio-website',
        demo: 'https://sumitra101.github.io/react-portfolio-website'
    },
    {
        id: 5,
        image: IMG4,
        title: 'GreenWeb',
        github: '',
        demo: 'https://greenweb.concinnitylimited.com/'
    },
    {
        id: 6,
        image: IMG5,
        title: 'Concinnity Limited',
        github: '',
        demo: 'https://concinnitylimited.com/'
    },
    {
        id: 7,
        image: IMG6,
        title: 'Genesis Block',
        github: '',
        demo: 'https://gb.concinnitylimited.com/'
    }
];

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                {github ? (
                                    <a href={github} className='btn' target='_blank'>
                                        GitHub
                                    </a>
                                ) : (
                                    <a href={github} className='btn btn-disable'>
                                        GitHub
                                    </a>
                                )}

                                <a href={demo} className='btn btn-primary' target='_blank'>
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default portfolio;

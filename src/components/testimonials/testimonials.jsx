import React from 'react'
import './testimonials.css'
import Avtr1 from '../../assets/avatar1.jpg'
import Avtr2 from '../../assets/avatar1.jpg'
import Avtr3 from '../../assets/avatar1.jpg'
import Avtr4 from '../../assets/avatar1.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
    {
        avatar:Avtr1,
        name:'Tina Snow',
        review:' Client testimonial goes here. Client testimonial goes here. Client testimonial goes here. Client testimonial goes here.'
    },
    {
        avatar:Avtr2,
        name:'Tina Snow',
        review:' Client testimonial goes here. Client testimonial goes here. Client testimonial goes here. Client testimonial goes here.'
    },
    {
        avatar:Avtr3,
        name:'Tina Snow',
        review:' Client testimonial goes here. Client testimonial goes here. Client testimonial goes here. Client testimonial goes here.'
    },
    {
        avatar:Avtr4,
        name:'Tina Snow',
        review:' Client testimonial goes here. Client testimonial goes here. Client testimonial goes here. Client testimonial goes here.'
    }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className='container testimonials__container'   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
            {
                data.map(({avatar,name,review},index)=>{
                    return(
                        <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                    <img src={avatar} alt="" />
                  
                </div>
                <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>
                        {review}
                    </small>
            </SwiperSlide>
                    )
                })
            }
          
        </Swiper>
    </section>

  )
}

export default testimonials
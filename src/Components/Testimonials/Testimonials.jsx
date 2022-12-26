import React from 'react';
import './Testimonials.css';
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import profile4 from '../../img/profile4.jpg';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
    const clients =[
    {
        img: profile1,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nobis culpa. Suscipit est totam velit sapiente esse repudiandae! Libero eius doloribus reprehenderit eligendi accusantium a! Corporis perferendis incidunt possimus placeat!"
    },
    {
        img: profile2,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nobis culpa. Suscipit est totam velit sapiente esse repudiandae! Libero eius doloribus reprehenderit eligendi accusantium a! Corporis perferendis incidunt possimus placeat!"
   
    },
    {
        img: profile3,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nobis culpa. Suscipit est totam velit sapiente esse repudiandae! Libero eius doloribus reprehenderit eligendi accusantium a! Corporis perferendis incidunt possimus placeat!"
   
    },
    {
        img: profile4,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nobis culpa. Suscipit est totam velit sapiente esse repudiandae! Libero eius doloribus reprehenderit eligendi accusantium a! Corporis perferendis incidunt possimus placeat!"
   
    }
    ]

  return (
    <div className='t-wrapper' id='Testimonials'>
      <div className='t-heading'>
        <span>  Clients always Get</span>
        <span> Exceptional Work</span>
        <span> from me...</span>
    <div className='blur t-blur1' style={{ background : 'var(--purple)'}} ></div>
    <div className='blur t-blur2' style={{ background : "skyblue" }} ></div>

    {/* slider  */}

    <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    Pagination={{clickable: true}}
    >

       {clients.map((client , index) =>{
        return(
        <SwiperSlide key={index}>
         <div className='testmonial'>
        <img src={client.img} alt="" />
        <span>{client.review}</span>
        </div>
        </SwiperSlide>
        )
       } )}
    </Swiper>


      </div>
    </div>
  )
}

export default Testimonials
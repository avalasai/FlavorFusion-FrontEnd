import React from 'react';
import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum temporibus, dolore aliquid nam rerum quisquam fuga? Quas, animi fugit.',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 2,
        name:'Jane Doe',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum temporibus, dolore aliquid nam rerum quisquam fuga? Quas, animi fugit.',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 3,
        name:'John Doe',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum temporibus, dolore aliquid nam rerum quisquam fuga? Quas, animi fugit.',
        img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    }
]

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    };
  return(
  <>
  <div className='py-10'>
    <div className="container">
    {/* Header Section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Testimonial</p>
            <h1 className='text-3xl font-bold'>Testimonial</h1>
            <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum temporibus,
                     dolore aliquid nam rerum quisquam fuga? Quas, animi fugit.</p>
        </div>
    {/* testimonial Section */}
        <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
            <Slider {...settings}>
                {TestimonialData.map(({id, name, text, img}) => {
                        return( 
                        <div key={id} className='my-6'>
                            <div className='flex flex-col justify-center items-center gap-4 text-center shalow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                                <img src={img} alt="" className='w-20 h-20 rounded-full block mx-auto'/>
                                <p className='text-gray-500 text-sm'>{text}</p>
                                <h1 className='text-xl font-bold'>{name}</h1>
                                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                            </div>
                        </div>
                        );
                })}
            </Slider>
        </div>
    </div>
  </div>
  </>
  );
};

export default Testimonial;
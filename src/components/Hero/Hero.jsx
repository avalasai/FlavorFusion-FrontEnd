import React from 'react';
import bgimg from '../../assets/Website/vector3.png';
import bir1 from '../../assets/biryani/biryani2.png';
import bir2 from '../../assets/biryani/biryani3.png';
import bir3 from '../../assets/biryani/biryani5.png';

const imglist = [

    {
        id: 1,
        img: bir1,
    },
    {
        id: 2,
        img: bir2,
    },
    {
        id: 3,
        img: bir3,
    }

]

const bgimage ={
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
}

const Hero = () => {

    const [imageId, setImageId] = React.useState(bir1);
  return (
    <>
    <div style={bgimage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>
    <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section     */}
            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                <h1 className='text-5xl sm:text-6xl' lg:text-7xl font-bold>Welcome to the food zone</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300'>Order Now</button>
                </div>
            </div>
            {/* image content section     */}
            <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
                {/* Main image section */}
                <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                    <img src={imageId} alt="" className='w-[300px] sm:w-[450px] mx-auto spin'/>    
                </div>
                {/* image list section */}
                <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                    {imglist.map((item) => (
                        <img key={item.id} src={item.img} className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200' onClick={() => setImageId(item.img)}/>))}
                </div>
            </div>

        </div>
    </div>
    </div>
    </>
  );
};

export default Hero
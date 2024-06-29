import React from 'react'
import gif from '../../assets/Website/mobile_bike.gif'
import playstore from '../../assets/Website/play_store.png'
import appstore from '../../assets/Website/app_store.png'

const AppStore = () => {
  return <>
    <div className='bg-gray-100 dark:bg-gray-800 py-14'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700'>Available Both on Android and IOS</h1>
                </div>
                <div className='flex flex-wrap justify-center sm:justify-start-items-center'>
                    <a href="#">
                        <img src={playstore} alt="playstore" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                    <a href="#">
                        <img src={appstore} alt="playstore" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                </div>
                <div>
                    <img src={gif} alt="gif" className='max-w-[300px] mx-auto'/>
                </div>
            </div>
        </div>
    </div>
    </>;
};

export default AppStore
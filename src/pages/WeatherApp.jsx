import React from 'react'
import LeftBanner from '../components/LeftBanner';
import RightBanner from '../components/RightBanner';


const WeatherApp = () => {
  return (
    <div className='  w-[100vw] flex md:flex-row gap-5 flex-col  md:pr-4 lg:pr-6  pt-5 h-[100vh]'>
        <LeftBanner />
        <RightBanner />
    </div>
  )
}

export default WeatherApp;
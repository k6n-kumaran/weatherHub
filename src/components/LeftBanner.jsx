import React from 'react'
import { WiSolarEclipse , WiSnowflakeCold, WiDayCloudy ,WiMoonAltNew} from "react-icons/wi";



const LeftBanner = () => {
  return (
    <div className=' w-full md:w-1/2 flex flex-col px-2  sm:px-6 h-full gap-5 '>
        <div className='flex justify-between pl-0 md:pl-4 pt-2'>
          <div  className='flex'>
           <div className='flex relative'>
              <WiMoonAltNew size={35} color='#ddd'  className=' absolute top-2 left-1 z-10'/>
              <WiMoonAltNew size={35} color='orange' className=' absolute top-0 left-3' />
           </div>
           <h1 className='flex text-xl sm:text-2xl md:text-3xl pl-12 pt-1 font-semibold text-gray-600'>WeatherHub</h1>
          </div>
           <WiSolarEclipse size={45} className='text-gray-400 '/>
        </div>
        <div  className='flex items-center '>
           <WiSnowflakeCold color='#BC7FCD'  size={60}/>
        </div>
        <div className=' flex flex-col   items-center   gap-10 '>
          <h2 className='text-4xl  sm:text-5xl text-center md:text-start  font-bold sm:w-[450px] md:w-[380px] lg:w-[500px] text-gray-600'>Weather and Forecast Application</h2>
           <p className=' w-[260px]  sm:w-[500px]  md:w-[350px] lg:w-[500px]  text-gray-600'>
           Welcome to Weather Hub, your go-to destination for accurate and reliable weather information. Whether you're planning your day, a weekend getaway, or a long-term trip,
            we've got you covered with comprehensive weather forecasts and real-time updates. </p> 
        </div>
        
    </div>
  )
}

export default LeftBanner;
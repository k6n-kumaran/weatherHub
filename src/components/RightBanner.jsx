import React, { useEffect, useState } from 'react'
import { cloud } from '../assets'
import SearchBar from './SearchBar'

const RightBanner = () => {
    
  const [search, setSearch]  = useState("Chennai")
  const [loading,setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  


  function getDate() {
    const date = new Date();
    const currentDate = date.toLocaleString('en-us',{
       weekday: "long",
       month: "long",
       day: "numeric",
       year:"numeric"
    });
    return currentDate;
  }

  async function fetchWeather() {
    setLoading(true)
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=24411053cd9ed1e0fedcd170e6a1ed21`)
      const data = await res.json();
      setWeatherData(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

   async function handleClick() {
      fetchWeather();
      setSearch("")
   }

   useEffect(() => {
    fetchWeather()
    setSearch("")
  },[])


  return (
    <div className='w-full h-full lg:w-[900px] md:w-[600px]  md:h-[95vh] bg-[#c8e9a7]  '>
       <div className='flex flex-col h-[100px] justify-center items-center gap-4  mt-5'>
         <h2 className='text-xl sm:text-3xl   font-semibold text-gray-700'>Dive into WeatherHub</h2>
         <SearchBar 
          search={search} 
          setSearch={setSearch}
          handleClick={handleClick}
         />
       </div>
       <div className=' flex items-center justify-center  m-auto h-[80%]  bg-[#c8e9a7]  w-full   py-2 '>
        <div className='bg-[#FF9800] w-[250px] sm:w-[310px] md:w-[260px] lg:w-[290px] h-[410px] 
            rounded-2xl mt-[-30px] md:mt-[-35px]'>  
           </div>
           <div className='bg-[#2C7865] w-[250px] sm:w-[310px] md:w-[270px] lg:w-[290px] h-[420px] 
              rounded-2xl ml-[-270px] sm:ml-[-330px] md:ml-[-290px] lg:ml-[-310px] mt-[10px]'>
             {loading ? 
              <div  className='flex justify-center items-center flex-col  pt-4'>
          <div className='flex flex-col items-center'>
            <h2 className='text-white text-xl '>Place</h2>
             <span className='text-white  text-sm'>{getDate()}</span>
          </div>
          <div className=' h-[200px]'>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-7xl text-gradient mt-8  font-bold'>0°C</h2>
                <img src={cloud} className='w-[150px] text-center relative -top-14'   alt="Cloud" />
              </div>
          </div>
          <div className='grid grid-cols-3 gap-4 px-2 '>
              <div className='text-center text-white  font-semibold'>
                  <h3>Humidity</h3>
                  <p>0%</p>
              </div>
              <div className='text-center text-white font-semibold'>
                  <h3>Feels like</h3>
                  <p>0%</p>
              </div>
              <div  className='text-center text-white font-semibold'>
                  <h3>Pressure</h3>
                  <p>0</p>
              </div>
          </div>
          <div  className='text-3xl font-bold text-gradient2  pt-5 '>
            Pleasant
          </div>
          
        </div>
        : 
        <div  className='flex justify-center items-center flex-col  pt-4'>
          <div className='flex flex-col items-center'>
            <h2 className='text-white text-xl '>{weatherData?.name}</h2>
             <span className='text-white  text-sm'>{getDate()}</span>
          </div>
          <div className=' h-[200px]'>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-7xl text-gradient mt-8  font-bold'>{parseFloat((weatherData?.main?.temp -  273.15).toFixed(1))}°C</h2>
                <img src={cloud} className='w-[150px] text-center relative -top-14'   alt="Cloud" />
              </div>
          </div>
          <div className='grid grid-cols-3 gap-4 px-3 sm:px-2 '>
              <div className='text-center text-white  font-semibold'>
                  <h3>Humidity</h3>
                  <p>{weatherData?.main?.humidity + "%"}</p>
              </div>
              <div className='text-center text-white font-semibold'>
                  <h3>Feels like</h3>
                  <p>{parseFloat((weatherData?.main?.feels_like - 273.15).toFixed(1)) + "%"}</p>
              </div>
              <div  className='text-center text-white font-semibold'>
                  <h3>Pressure</h3>
                  <p>{weatherData?.main?.pressure}</p>
              </div>
          </div>
          <div  className='text-3xl font-bold text-gradient2  pt-5 text-center'>
          {weatherData && weatherData.weather[0] ? weatherData.weather[0].description : ""}
          </div>
          
        </div>
        }
        
       
           </div>
        </div>    
    </div>
  )
}

export default RightBanner
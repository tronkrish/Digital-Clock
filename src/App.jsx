import React, { useEffect, useState } from 'react'

const App = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(()=> {
    const timer = setInterval(()=> {
      setCurrentTime(new Date());
    }, 1000);

    return ()=> clearInterval(timer)
  }, [])

  const formatTimeWithZero = (num) =>{
    return num < 10 ? `0${num}` : num;
  }

  const formatHour = (hour) =>{
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  }

  const formatDate = (date)=> {
    const options = {weekday : "long", year : "numeric", month : "long", day : "numeric"};
    return date.toLocaleDateString(undefined, options);
  }
  return (
    <div className='digital-clock'>
      <h1>Digital Clock</h1>
      <div className="time">{formatTimeWithZero (formatHour (currentTime.getHours()))} : {formatTimeWithZero (currentTime.getMinutes())} : {formatTimeWithZero (currentTime.getSeconds())} {currentTime.getHours() >= 12 ? "PM" : "AM"}</div>
      <div className="date">{formatDate (currentTime)}</div>
    </div>
  )
}

export default App
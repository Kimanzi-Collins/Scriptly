import React from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import { useState } from 'react'

const Homepage = () => {
  const {isRateLimited, setIsRateLimited} = useState(true);
  const {notes, setNotes} = useState([]);
  const {isLoading, setIsLoading} = useState(false);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
    </div>  
  )
}

export default Homepage
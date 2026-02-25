import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import { useState } from 'react'
import axios from 'axios'
import  toast  from 'react-hot-toast';

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
      const fetchNotes = async () => {
        try {
          const res = await axios.get('http://localhost:3000/api/notes');
          console.log(res.data);
          setNotes(res.data);
          setIsRateLimited(false);
        } catch (error) {
          console.error('Error fetching notes:', error);
          if (error.response && error.response.status === 429) {
            setIsRateLimited(true);
          } else {
            toast.error("Failed to load notes. Please try again later.");
          }
        }finally {
            setIsLoading(false);
        }
      };
      fetchNotes(); 
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
    </div>  
  )
}

export default Homepage
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchData } from '../../../API/FetchData.jsx';
import VideoesCards from '../VideoesCollection/VideoesCard.jsx';

const SearchFeed = () => {
  const {SearchTerm} =useParams();
const [Videoes,SetVideos] = useState([]);

  useEffect(()=>{
    FetchData(`search?part=snippet&q=${SearchTerm}`)
    .then((data)=>SetVideos(data.items))
  },[SearchTerm]);

  const handleScroll = () => {
    window.scrollTo({

      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div>
    
    <div className='w-full h-screen   '>
      <h5 className='pl-1 font-bold flex '>{SearchTerm} Videoes</h5>
      <VideoesCards videoes={Videoes} />

      {/* Scroll Button */}
      <button onClick={handleScroll} id='scrollToTop'
       className='cursor-pointer outline-none fixed bottom-4 right-[20px] opacity-1'>^</button>
     


    </div>

    </div>
  )
}

export default SearchFeed
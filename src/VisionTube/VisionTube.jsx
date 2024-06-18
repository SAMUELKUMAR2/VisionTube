import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './VisionTube.css'

import Searchbar from './NavBar/Searchbar.jsx'
import SideBar from './SideBar/SideBar.jsx'
import CardCollection from './Right-collections/CardCollection/CardCollection.jsx'
import ChannelDetail from './Right-collections/VideoesCollection/ChannelDetail.jsx'
import VideoDetail from './Right-collections/VideoesCollection/VideoDetail.jsx'
import SearchFeed from './Right-collections/SearchFeed/SearchFeed.jsx'

function VisionTube() {


  return (<>
  
  <div className='flex bg-purple-100'>
    <div className=' text-2xl  w-full  grid grid-cols-4 gap-4 '>
  
      <div className=' pl-3 col-span-4 max-lg:col-span-5 border-l-2 w-full border-black border-opacity-30 '>
      <BrowserRouter>
      <Searchbar />
   

     <Routes>
      <Route path='/' exact element={<CardCollection  />}/>
      <Route path='/channel/:id'  element={<ChannelDetail  />} />
      <Route path='/video/:id'  element={<VideoDetail/>}/>
      
      <Route path='/Search/:SearchTerm' element={<SearchFeed  />}/>
      </Routes>
      </BrowserRouter>
      </div>
    
    </div>
    
    </div>
    
    </>  )
}

export default VisionTube

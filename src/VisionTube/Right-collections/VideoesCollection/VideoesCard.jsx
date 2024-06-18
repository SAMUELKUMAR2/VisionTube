import React, {useState}from 'react'
import VideoCollection from './VideoCollection.jsx';
import ChannelCollection from './ChannelCollection.jsx';

import categories from '../CardCollection/Constants.jsx';

const VideoesCards = ({videoes,SelectCategory,SetselectedCategory,display}) => {
  const [bg, setbg] = useState("")

  const handleScroll = () => {

    
    window.scrollTo({

      top: 0,
      scrollTo:top,
      behavior: "smooth"
    })
  }
  
    // console.log(videoes);
  return(<>
  
   
  <div className=' w-full h-full '>

    {/* Tags */}
  <div className={`mt-5 ${display}`}>
                {/* <TagsCollection  /> */}
                {categories.map((c)=>(
                  <button
                  className={`m-3 bg-${c.name===SelectCategory && bg} text-${c.name===SelectCategory && "white"} mt-0 mb-0 outline rounded-md p-3 pt-1 pb-1 `}
                  onClick={()=>{SetselectedCategory(c.name)
                    setbg('gray-950')
                  }}
                  >
                  
                  <span>{c.name}</span>
                </button>
                ))}
            </div>
 <div className='border-2 mt-3  '>

 {videoes.map((Item,idx)=>(
 
 <div key={idx} className='   m-2  flex  flex-col  '>
  
   {Item.id.videoId && <VideoCollection video={Item} display ={display} />}
   {Item.id.channelId && <ChannelCollection ChannelDetails={Item}/>}
  
 </div>

))}

      {/* Scroll Button */}
      <button onClick={handleScroll} id='scrollToTop'
       className='cursor-pointer outline-none fixed bottom-6 right-[20px] opacity-1'>^</button>
 </div>
  </div>
   
    </>
  )
}

export default VideoesCards
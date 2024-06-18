import React from 'react'
import { Link } from "react-router-dom";
const VideoCollection = ({ video: { id: { videoId }, snippet },display}) => {
  // console.log(snippet);

  return (<>
   
<Link to={videoId?`/video/${videoId}`:videoId}>
    <div className={`grid ${display?'grid-cols-1':'grid-cols-3'}  shadow-inner max-lg:block`}>
    {/* thumbnail */}
            <div className=' col-span-1   gap-2 border overflow-hidden rounded-2xl hover:rounded-none ' >
              <img className='  ' src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
            </div>
      {/* Video Title */}
            <div className={`col-span-2  p-4  flex-col  `}>
              <h5>{snippet?.title}</h5>
              <div className='flex mt-3 '><img className='w-5 h-5 rounded-full overflow-hidden mr-2 ' src={snippet?.thumbnails?.high?.url} alt="a" />
                <h6 className=' text-sm font-semibold'>{snippet?.channelTitle}</h6>

              </div>
        {/* descriptions */}
              <p className='truncate pr-4  font-thin text-base mt-2'>{snippet?.
                description}</p>
            </div>
    </div>
            </Link>
  </>
  )
}

export default VideoCollection
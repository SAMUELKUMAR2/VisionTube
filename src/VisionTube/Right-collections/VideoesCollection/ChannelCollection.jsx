import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ChannelCollection = ({ChannelDetails}) => {
// console.log(ChannelDetails);
const [buttonText, setButtonText] = useState('Subscribe');
const[sub,setsub] = useState(false)
const [buttoncolor, setbuttoncolor] = useState('bg-gray-950')
const handleclick=()=>{
 if(buttonText=='Subscribe'){
  setButtonText('Subscribed');
  setbuttoncolor('bg-red-600');
  setsub(true);
 }else{
  setButtonText('Subscribe');
  setbuttoncolor('bg-gray-950');
 }
}
  return (
    <div className='grid   grid-cols-3 max-lg:block'>
      <Link to={`/channel/${ChannelDetails?.id?.channelId}`}>

    <div className='ml-10 col-span-1   gap-2  overflow-hidden rounded-2xl hover:rounded-none ' >
      <img className='h-[180px] border border-gray-500 overflow-hidden rounded-[50%]' src={ChannelDetails?.snippet?.thumbnails?.high?.url} alt={ChannelDetails?.snippet?.title} />
    </div>
    </Link>
    <Link to={`/channel/${ChannelDetails?.id?.channelId}`}>
    <div className='col-span-1  p-4 flex flex-col '><h5>{ChannelDetails?.snippet?.title}</h5>
              <div className='flex mt-3 '>
                <h6 className=' text-sm font-semibold'>{ChannelDetails?.snippet?.channelTitle}</h6>

              </div>
              {/* Subscriber count */}
              <div className='flex flex-col font-thin text-base '>
              <p>{ChannelDetails?.snippet?.customUrl} . 
              {sub?(parseInt((ChannelDetails?.statistics?.subscriberCount))+1).toString():(parseInt((ChannelDetails?.statistics?.subscriberCount))).toString()} Subscriber</p>
              </div>

              <p className='truncate pr-4 overflow-hidden font-thin text-base mt-2'>{ChannelDetails?.snippet?.
                description}</p>

            </div>
            </Link>
            <div className='flex justify-end items-center mr-5 pr-[20px] pb-[30px]'>
             <button onClick={handleclick} className={`border pl-2 pr-2 pb-1 rounded-full font-normal text-white ${buttoncolor}`}>
              <h6>{buttonText}</h6></button>
            </div>
            
    </div>
  )
}

export default ChannelCollection
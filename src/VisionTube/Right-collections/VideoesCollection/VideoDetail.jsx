import React, { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'
import { FetchData } from '../../../API/FetchData.jsx'
import { Link, useParams } from 'react-router-dom'
import like from '../../icons/like.png'
import dislike from '../../icons/dislike.png'
import VideoesCards from './VideoesCard.jsx'
import Loader from './Loader.jsx'


const  VideoDetail = () => {
  const {id} = useParams();
  const [VideoDetail, setvideoesDetails] = useState(null);
  const [relatedVideoes,setVideoes] =useState(null);
  const[likecolor,setlikecolor] = useState('')
  const [newcount, setnewcount] = useState(false);

  //Subscriber
  const [buttonText, setButtonText] = useState('Subscribe');

const [buttoncolor, setbuttoncolor] = useState('bg-gray-950')
const handleclick=()=>{
 if(buttonText=='Subscribe'){
  setButtonText('Subscribed');
  setbuttoncolor('bg-red-500');
 
 }else{
  setButtonText('Subscribe');
  setbuttoncolor('bg-gray-950');
 }
}

//subscriber count increase
  const handlecount=()=>{
if(!newcount){
  setnewcount(true)
  setlikecolor('bg-red-600')
}
else{
  setlikecolor('')
}
  }
  
  // console.log(VideoDetail);
  useEffect(() => {
    FetchData(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{
      setvideoesDetails(data.items[0]);

    })
    //related video
    FetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> {
      setVideoes(data.items)
    });
      
  }, [id])

  if(!VideoDetail?.snippet) return <Loader />;
  
  if(!relatedVideoes) return "Loading....";

//destructing data from videoDetail
const {snippet : {title,channelId,channelTitle,thumbnails
:{
  medium:{url}}},statistics:{viewCount,likeCount}}= VideoDetail

  return (
    
    <>
    <div className='grid grid-cols-5 gap-4 h-[84vh]  '>
    <div className=' col-span-3   '>
      <div className='   '>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
      controls playing
      className="react-player " />
      </div>
      <div className=''>
      <h2 className='font-semibold mt-4'>{title}</h2>
      </div>
      <div className='flex justify-between '>
        <div className='flex'>
        <Link to={`/channel/${channelId}`}>
          <div className='flex p-2'>
        <img className='w-8 h-8 rounded-full  mr-2 ' src={url} alt="a" />
                <h6 className=' text-lg font-bold'>{channelTitle}</h6>
                </div>
        </Link>

        <div className='flex  items-center  mt-2 pr-[20px] pb-[30px]'>
             <button onClick={handleclick} className={`border pl-2 pr-2 pb-1 rounded-full font-normal text-white ${buttoncolor}`}>
              <h5 className='text-lg'>{buttonText}</h5></button>
            </div>
            </div>
    {/* LikeCount */}
    <div className='mt-3  flex gap-3 mr-20'>
     <img className={`w-5 h-6 ${likecolor}`} src={like} alt="like" onClick={handlecount}/> <h4 className='text-sm'>{newcount?(parseInt(likeCount)+1).toLocaleString():(parseInt(likeCount)-1).toLocaleString()}</h4>
     <img className='w-5 h-6 ' src={dislike} alt="like" />
    </div>

      </div>
     
        
    </div>
    
    <div className='  m-5 mt-0 col-span-2 overflow-scroll'>
    <VideoesCards videoes={relatedVideoes}  display="hidden"/>
    </div>
    </div>
    </>
  )
}

export default VideoDetail

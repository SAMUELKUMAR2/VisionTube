import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchData } from '../../../API/FetchData.jsx';

import ChannelCollection from './ChannelCollection.jsx';

import VideoesCards from './VideoesCard.jsx';


const ChannelDetail = () => {
    const {id} = useParams();
  
    const [ChannelDetail,SetChannelDetail]=useState(null);
    const [Videoes,SetVideoes] = useState([]);
    // console.log(ChannelDetail);
    console.log(Videoes);
    useEffect(()=>{

        // searching channelDetail by id
      FetchData(`channels?part=snippet&id=${id}`).then((data)=>SetChannelDetail(data.items[0]));


      //searching videoes using channelId and id
     FetchData(`search?channelId=${id}&part=snippet&order=date`).then((data)=>SetVideoes(data.items));
    },[id])
    
  return (
    <div >
        <div className='w-full  h-[180px] border  mb-3'>
      
       <img className='w-full h-full' src={ChannelDetail?.brandingSettings?.image?.
    bannerExternalUrl} alt="cover" />

        </div>
  
    
        <div className=''>
       <ChannelCollection ChannelDetails={ChannelDetail} />
       <VideoesCards videoes={Videoes} />
        </div>
    </div>
  )
}

export default ChannelDetail
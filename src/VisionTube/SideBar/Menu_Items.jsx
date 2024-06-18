import React from 'react'
import Home from './Icons/Home.png'
import shorts from './Icons/shorts.png'
import subscription from './Icons/subscription.png'
import channel from './Icons/channel.png'
import history from './Icons/history.png'
import Videoes from './Icons/Videoes.png'
import watch from './Icons/watch.png'
import cut from './Icons/cut.png'

const Menu_Items = () => {
 
  return (
    <div className='max-lg:invisible'>
      <div>
        <button className='flex m-2 p-2 gap-5 tracking-tighter' ><img className='pt-2' src={Home} alt="home" 
       
        /> Home</button>
        <button  className='flex m-2 p-2 gap-5 tracking-tighter '> <img className='pt-2' src={shorts} alt="shorts" />Shorts</button>
        <button className='flex m-2 p-2 gap-5 tracking-tighter'><img className='pt-2' src={subscription} alt="subscription" />Subscriptions</button>
      </div>
      <hr></hr>
      <div>
      <button className='flex m-2 p-2 gap-5 tracking-tighter '><img className='pt-2' src={channel} alt="channel" />Your Channel</button>
      <button className='flex m-2 p-2 gap-5 tracking-tighter'><img className='pt-2' src={history} alt="history" />History</button>
      <button className='flex m-2 p-2 gap-5 tracking-tighter'><img className='pt-2' src={Videoes} alt="videoes" />Your Videos</button>
      <button className='flex m-2 p-2 gap-5 tracking-tighter'><img className='pt-2' src={watch} alt="watch" />Watch Later</button>
      <button className='flex m-2 p-2 gap-5 tracking-tighter'><img className='pt-2' src={cut} alt="cut" />Clips</button>
      </div>
      <hr></hr>
    </div>
  )
}

export default Menu_Items

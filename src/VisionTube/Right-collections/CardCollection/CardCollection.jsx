import React, { useEffect, useState } from 'react'
import VideoesCards from '../VideoesCollection/VideoesCard.jsx'

import { FetchData } from '../../../API/FetchData.jsx'


const CardCollection = () => {
  const [videoes, setvideoes] = useState([]);
  const [SelectCategory, SetselectedCategory] = useState('New');


  // console.log(FetchData(`search?part=snippet&q=${SelectCategory}`));

 
  useEffect(() => {
    FetchData(`search?part=snippet&q=${SelectCategory}`)
      .then((data) => {
        setvideoes(data.items);
        // console.log(data.items );

      })
  }, [SelectCategory])

  // if(!SelectCategory?.snippet) return "Loading....";
  return (


    <div className='w-[98vw] h-[98vh] overflow-y-scroll border-2 '>
      <h5 className='pl-1 font-bold flex '>{SelectCategory}</h5>
      <VideoesCards videoes={videoes} SelectCategory={SelectCategory} SetselectedCategory={SetselectedCategory} />
 
     


    </div>
  )
}

export default CardCollection

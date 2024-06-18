import React, { useEffect, useState } from 'react'



const Tags = ({name}) => {

  const [TagSearch,SetTagSearch] = useState('');

  // useEffect(() => {
  //   FetchData(`search?part=snippet&q=${TagSearch}`)
  //     .then((data) => {
  //       setvideoes(data.items);
  //       // console.log(data.items );

  //     })
  // }, [TagSearch])
 
  return (
    <div>
      <button 
     
   
      className='w-auto h-auto m-4  pl-2 pr-2 flex border-2 border-black border-opacity-35 rounded-md'>
        {name}
        </button>
    </div>
  )
}


export default Tags
   
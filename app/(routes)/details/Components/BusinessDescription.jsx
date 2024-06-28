import Image from 'next/image';
import React from 'react'

const BusinessDescription = ({business}) => {
  return business?.name &&  (
    <div>
      <h2 className="font-bold text-[25px]">Description</h2>
      <p className="mt-4 text-lg text-gray-600">{business.about}</p>
      <h2 className="font-bold text-[25px] mt-8">Gallery</h2>
      <div className='grid grid-cols-2 md:grid-4 mt-4 lg:grid-cols-4 gap-5 mt-5'>
        {business?.images?.map((image,index)=>(
            <Image src={image?.url} width={400} height={100} alt='image' key={index} 
            className="rounded-lg " />  
        ))}
      </div>
    </div>
  )
}

export default BusinessDescription;
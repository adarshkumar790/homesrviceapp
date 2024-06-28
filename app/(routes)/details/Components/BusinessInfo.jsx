import { Button } from '@/components/ui/button'
import { Mail, MapPin, User, Share, Clock } from 'lucide-react'
// import { Share } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const BusinessInfo = ({business}) => {
  return business?.name &&(
    <div className="md:flex gap-4  items-center ">
          <Image src={business?.images[0].url} width={150} height={200}
           alt={business.name}  className="rounded-full h-[150px] object-cover" />

           <div className="flex justify-between items-center w-full">
           <div className="flex flex-col mt-2 md:mt-0 items-baseline  gap-2">
            <h2 className="text-primary p-1 px-3 text-lg
             bg-purple-100 rounded-full"> {business.category.name}</h2>
             <h2 className="text-[40px] font-bold">{business.name}</h2>
             <h2 className='flex gap-2 text-lg text-gray-500'><MapPin/>{business.address}</h2>
             <h2 className="flex gap-2 text-lg text-gray-500"> <Mail/> {business.email}</h2>
           </div>
           <div className="flex flex-col gap-5 items-end">
            <Button><Share/></Button>
            <h2 className='flex gap-2 text-xl text-primary'><User/>{business.contactPerson}</h2>
            <h2 className='flex gap-2 text-xl text-primary-500'><Clock/>Availaible Day & Night (24*7)</h2>
           </div>
           </div>
    </div>
  )
}

export default BusinessInfo;
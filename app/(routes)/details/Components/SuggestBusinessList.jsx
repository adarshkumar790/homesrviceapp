import { Button } from '@/components/ui/button'
import { NotebookPen } from 'lucide-react'
import Image from 'next/image';
import React,{useEffect,useState} from 'react'
import GlobalApi from '@/app/Services/GlobalApi';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import BookinSection from './BookinSection';


const SuggestBusinessList = ({business}) => {

  const [businessList, setBusinessList]=useState([]);
  useEffect(()=>{
    // console.log(params);
    business&&getBusinessList()
  },[business])

  const getBusinessList=()=>{
    GlobalApi.getBusinessByCategory(business?.category?.name)
    .then(resp=>{
        console.log(resp?.businessLists);
        setBusinessList(resp?.businessLists)
    })
    
  }

  return (
    <div className="md:pl-10">
    
      <BookinSection business={business}>
      <Button><Link href="/Email" className="flex gap-2 w-full">
        <NotebookPen/>
        Book Appointment
      </Link></Button>
      </BookinSection >
      <div className="hidden md:block">
      <h2 className="font-bold text-lg mt-3 mb-3 ">Simillar Business</h2>
       <div className="">
         {businessList&&businessList.map((business,index)=>(

           <Link href={"/details/"+business.id }className="flex gap-2 mb-4 hover:border rounded-lg p-2 hover:shadow-md border-primary ">
            <Image src={business?.images[0]?.url} alt={business.name} 
            width={100} height={100} className="rounded-lg object-cover"/>
            <div className='mb-'>
              <h2 className='font-bold'>{business.name}</h2>
              <h2 className='text-primary'>{business.contactPerson}</h2>
              <h2 className='text-gray-400'>{business.address}</h2>
            </div>
            </Link>
         ))}
       </div>
    </div>
    </div> 
  )
}

export default SuggestBusinessList
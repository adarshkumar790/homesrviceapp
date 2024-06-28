import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetClose,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";


import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react'
import { useEffect } from 'react';

import { Button } from "@/components/ui/button";
import GlobalApi from '@/app/Services/GlobalApi';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
  

const BookinSection = ({children, business}) => {

    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTime, setSelectedTime] = useState();
    const {data} =useSession();
    console.log(data +"data")
    useEffect(()=>{
      getTime();
    },[])
    

    const getTime = () => {
      const timeList = [];
      for (let i = 10; i <= 12; i++) {
        timeList.push({time: i + " :00 AM" });
        timeList.push({time: i + ":30 AM" });
      }
      for (let i = 1; i <= 6; i++) {
        timeList.push({time: i + ":00 PM" });
        timeList.push({time: i + ":30 PM" });
      }
     setTimeSlot(timeList);
     console.log(timeList)
}
const saveBooking=()=>{
    GlobalApi.createNewBooking(business.id,
       date, selectedTime, data.user.email, data.user.name)
       .then(resp=>{
        console.log(resp)
        if(resp)
        {
          toast('Service Booked Successfully');
        }
       },(e)=>{
        toast('Error while creating booking');
       }
      )
}
  return (
    <div>
        
        <Sheet>
  <SheetTrigger asChild>
  {children}
  </SheetTrigger>
  <SheetContent className="overflow-auto">
    <SheetHeader>
      <SheetTitle>Book an Service</SheetTitle>
      <SheetDescription>
        Select Date and Time slot to back an service 
        <div className="flex flex-col gap-5 items-baseline">
            
            <Calendar
             mode="single"
             selected={date}
             onSelect={setDate}
             className="rounded-md border"
             />
        </div>
        <h2 className='mt-5 font-bold'>Select Time Slot</h2>
        <div className='grid grid-cols-3 gap-3'>
          {timeSlot.map((item,index)=>(
            <Button key={index} variant='outiline' 
            className={`border rounded-full p-2 px-3
             hover:bg-primary hover:text-white ${selectedTime==item.time&&'bg-primary text-white'}`} 
              onClick={()=>setSelectedTime(item.time)}>{item.time}</Button>
          ))}
        </div>
        <div>

        </div>
      </SheetDescription>
    </SheetHeader>
    <SheetFooter className="mt-5">
              <SheetClose asChild>
                <div className="flex gap-5">
                <Button variant="destructive" className="">Cancel</Button>
                <Button disabled={!(selectedTime&&date)}
                onClick={()=>saveBooking()}
                >Book</Button>
                </div>
              </SheetClose>
            </SheetFooter>
  </SheetContent>
</Sheet>
<div>

</div>

    </div>
  )
}

export default BookinSection;
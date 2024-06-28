"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';


const Header = () => {
  const  {data} = useSession();

  useEffect(()=>{
    console.log(data);

  },[data])
  return (
    <div className="p-5 shadow-sm flex justify-between ">
        <div className="flex item-center gap-6">
        <div className="flex items-center gap-2">
        <Image src='/namaste.jpeg' alt="" width={70} height={80}/>
        <h4 className="ml-1">Helping hands</h4>
        </div>
        <div className="md:flex items-center gap-6 hidden">
        <h2 className="hover:scale-105 hover:text-primary cursor-pointer"><Link href="/">Home</Link></h2>

            <h2 className="hover:scale-105 hover:text-primary curser-pointer">Services</h2>
            <h2 className="hover:scale-105 hover:text-primary curser-pointer">About Us</h2>
        </div>
        </div>
        <div>    
               {data?.user?
               
               <DropdownMenu>

  <DropdownMenuTrigger >
    <Image src={data?.user?.image} className='rounded-full' width={40} height={40}/> </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>My Booking</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
:
               <Button onClick={()=>signIn('descope')} className="bg-slate-600">Login/Sign Up</Button>
             }
        </div>
    </div>
  )
}

export default Header
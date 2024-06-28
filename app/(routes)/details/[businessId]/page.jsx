"use client"
import GlobalApi from '@/app/Services/GlobalApi';
import { signIn, useSession } from 'next-auth/react';
import React from 'react'
import { useEffect,useState } from 'react';
import BusinessInfo from '../Components/BusinessInfo';
import SuggestBusinessList from '../Components/SuggestBusinessList';
import BusinessDescription from '../Components/BusinessDescription';

const BusinessDetails = ({params}) => {
    const {data,status}=useSession();
    const [business,setBusiness]=useState([]);

 
     useEffect(()=>{
       console.log(params);
      params&&getbusinessById()
    },[params])


    const getbusinessById=()=>{
      GlobalApi.getBusinessById(params.businessId).then(resp=>{
        console.log(resp.businessList);
        // setBusinessList(resp?.businessLists)
        setBusiness(resp.businessList)
      })
    }

    useEffect(()=>{
      checkUserAuth();
    },[])

    const checkUserAuth=()=>{
      if(status==="loading"){
        return <p>Loading...</p>
    }
    if(status==="unauthenticated"){
        signIn('descope');
    }
 
    }

  return status=='authenticated'&&business&&(
    <div className="py-8 md:py-20 px-10 md:px-36 ">
          <BusinessInfo business={business} />
           
           <div className="grid grid-cols-3 mt-16">
            <div className="col-span-3 md:col-span-2 order-last md:order-first">
           <BusinessDescription business={business}/>
           </div>
           <div className="">
             <SuggestBusinessList business={business}/>
           </div>
           </div>
    </div>
  )
}

export default BusinessDetails;
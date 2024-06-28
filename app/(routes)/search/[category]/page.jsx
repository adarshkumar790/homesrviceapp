"use client"
import BusinessList from '@/app/Components/BusinessList'
import GlobalApi from '@/app/Services/GlobalApi'
import React from 'react'
import { useEffect, useState } from 'react'

const BusinessByCategory = ({params}) => {
  const [businessList, setBusinessList]=useState([]);
  useEffect(()=>{
    console.log(params);
    params&&getBusinessList()
  },[params])

  const getBusinessList=()=>{
    GlobalApi.getBusinessByCategory(params.category)
    .then(resp=>{
        console.log(resp?.businessLists);
        setBusinessList(resp?.businessLists)
    })
    
  }
  return (
    <div>
      <BusinessList title={params.category} businessList={businessList}/>
    </div>
  )
}

export default BusinessByCategory
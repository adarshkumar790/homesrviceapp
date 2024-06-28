"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./Components/Hero";
import CategoryList from "./Components/CategoryList";
import GlobalApi from "./Services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./Components/BusinessList";


export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);

  
  const getCategoryList=()=>{
    GlobalApi.getCategory().then((res)=>{
      console.log(res.categories);
      setCategoryList(res.categories);
    })
  }

  const getAllBusinessList=()=>{
    GlobalApi.getAllBusinessList().then((res)=>{
      console.log(res.businessLists);
      setBusinessList(res.businessLists);
    })
  }
  return (
     <div>
      <Hero/>
      <CategoryList categoryList={categoryList}/>
      <BusinessList businessList={businessList}
      title={'Popular Business'}/>
     </div>
  );
}

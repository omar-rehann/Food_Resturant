"use client"

import { useState,useEffect } from "react"
import Link from "next/link";

function Services(){
    const [services,setservices]=useState([]);
    useEffect(()=>{
        async function getservices(){
           try{
            const result=await fetch("/data/services.json");
            if(!result.ok){
 throw new Error("Failed to fetch data");            }
            const data=await result.json();
            setservices(data)
           }catch(error){
            console.log(error)
           }


        }
        getservices()

    },[])
    return(
        <>
        <div className="services bg-white py-16">
  {/* Header */}
  <div className="container  p-2 m-2 me-4  px-6  mb-12">
    <h3 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-5">
      Our Services
    </h3>

    <div className="relative w-[100%]   h-1 bg-gray-100 rounded-full">
      <span className="absolute left-0 top-0 w-32 h-1 bg-[#D4A05C] rounded-full"></span>
    </div>
  </div>

  {/* Services */}
  <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6  ">
    {services.map((ser) => {
      return (
        <div
          className="
            box-services
            bg-white
            border border-gray-100
            hover:border-[#D4A05C]/30
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.10)]
            hover:-translate-y-1
            transition-all
            duration-300
            text-center
            cursor-pointer
            p-8
            rounded-2xl
          "
          key={ser.id}
        >
          {/* Icon */}
          <div
            className="
              w-16 h-16
              mx-auto mb-5
              flex items-center justify-center
              rounded-full
              bg-[#D4A05C]/10
              border border-[#D4A05C]/20
              transition-all
              duration-300
              group-hover:bg-[#D4A05C]
            "
          >
            <i
              className={`${ser.icon} text-3xl text-[#D4A05C]`}
            ></i>
          </div>

          {/* Title */}
          <h2 className="text-xl font-serif font-semibold text-gray-900 mb-3">
            {ser.name}
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-6 mb-5">
            {ser.description}
          </p>
        </div>
      );
    })}
  </div>

  {/* Button */}
  <div className="text-center mt-12">
    <Link href="/Servicespage">
      <button
        className="
          bg-[#D4A05C]
          hover:bg-[#C18D4D]
          text-white
          font-semibold
          px-8 py-4
          rounded-xl
          cursor-pointer
          shadow-[0_8px_20px_rgba(212,160,92,0.25)]
          hover:shadow-[0_12px_25px_rgba(212,160,92,0.35)]
          transition-all
          duration-300
          rounded
        "
      >
        All Services
      </button>
    </Link>
  </div>
</div>
        </>
    )
}
export default Services
"use client"

import { useState,useEffect } from "react"

function AllServices(){
    const [allservices,setallservices]=useState([]);
    useEffect(()=>{
        async function getservices(){
           try{
            const result=await fetch("/data/allservices.json");
            if(!result.ok){
 throw new Error("Failed to fetch data");            }
            const data=await result.json();
            setallservices(data)

           }catch(error){
            console.log(error)
           }


        }
        getservices()

    },[allservices])
    return(
        <>
       <div className="services bg-white py-20">
  {/* Header */}
  <div className="container mx-auto text-center px-6 mb-14">
    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
      All Services
    </h2>

    <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
      Explore a wide range of professional home services designed to make your
      life easier. From cleaning and plumbing to electrical repairs and home
      maintenance, we connect you with trusted experts.
    </p>

    {/* Gold line */}
    <div className="relative w-32 h-1 bg-gray-100 rounded-full mx-auto mt-6">
      <span className="absolute left-0 top-0 w-20 h-1 bg-[#D4A05C] rounded-full"></span>
    </div>
  </div>

  {/* Services */}
  <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
    {allservices.map((ser) => {
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
</div>
        </>
    )
}
export default AllServices
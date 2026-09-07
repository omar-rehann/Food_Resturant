"use client"
import { useState,useEffect } from "react";
function Whychoose() {
    const [reasons,setreasons]=useState([]);
        useEffect(()=>{
            async function getservices(){
               try{
                const result=await fetch("/data/whychoose.json");
                if(!result.ok){
     throw new Error("Failed to fetch data");            }
                const data=await result.json();
                setreasons(data)
    
               }catch(error){
                console.log(error)
               }
    
    
            }
            getservices()
    
        },[reasons])
  return (
    <section className="relative bg-white text-gray-800 py-24 overflow-hidden">
  {/* Watermark fork/knife motif */}
  <i
    className="fa-solid fa-utensils absolute -right-10 top-10 text-[220px] text-gray-900/[0.025] rotate-12 pointer-events-none select-none"
    aria-hidden="true"
  ></i>

  <div className="relative max-w-6xl mx-auto px-6">
    {/* Header */}
    <div className="max-w-2xl mb-16">
      <span className="inline-flex items-center gap-2 text-[#D4A05C] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
        <span className="w-8 h-px bg-[#D4A05C]"></span>
        Why Choose Us
      </span>

      <h2 className="font-serif text-gray-900 text-4xl md:text-5xl leading-tight mb-5">
        Cooked with care,
        <br />
        served with pride.
      </h2>

      <p className="text-gray-500 text-base leading-7">
        We built this place around one idea: food should feel personal.
        Here&apos;s what keeps our guests coming back to the table.
      </p>
    </div>

    {/* Reasons grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reasons.map((reason) => (
        <div
          key={reason.id}
          className="
            group
            bg-white
            p-8
            rounded-2xl
            border border-gray-100
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.10)]
          "
        >
          <div
            className="
              w-12 h-12
              flex items-center justify-center
              rounded-full
              border border-[#D4A05C]/40
              text-[#D4A05C]
              mb-5
              transition-all
              duration-300
              group-hover:bg-[#D4A05C]
              group-hover:text-white
              group-hover:shadow-md
            "
          >
            <i className={`${reason.icon} text-lg`}></i>
          </div>

          <h3 className="font-serif text-gray-900 text-xl mb-2">
            {reason.title}
          </h3>

          <p className="text-gray-500 text-sm leading-6">
            {reason.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export default Whychoose;
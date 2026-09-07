"use client"
import Link from "next/link";
import { useState,useEffect } from "react"
function Categories(){
        const [allcat,setcat]=useState([]);

    useEffect(()=>{
       async function getcat(){
            try{
 const result=await fetch("http://localhost:4000/api/food/showcategory");
            const data =await result.json();
            setcat(data.data);
            }catch(error){
                console.log(error)
            }
        }
        getcat();

    },[])
    return(
        <>
        <div className="categories mt-5">
        
            <div className="content  grid sm:grid-cols-6">
                       {allcat.map((ser) => {
      return (
        <Link  key={ser._id} className="block !no-underline !text-inherit hover:no-underline"  href={`/choosecategories/${ser.name}`}>
         <div
  className="
    bg-white
    m-2
    p-6
    rounded-2xl
    border border-gray-100
    hover:border-[#D4A05C]/40
    shadow-sm
    hover:shadow-md
    transition
    text-center
    cursor-pointer
  "
  key={ser.id}
>
  {/* Icon */}
  <div
    className="
      w-12 h-12
      mx-auto mb-4
      flex items-center justify-center
      rounded-full
      bg-[#D4A05C]/10
    "
  >
    <img
                             src={`http://localhost:4000/uploads/${ser.image}`}
                            alt={ser.name}
                            className="w-12 h-12 object-cover rounded-lg"
                        />
  </div>

  {/* Title */}
  <h5 className="text-lg font-semibold text-gray-900">
    {ser.name}
  </h5>
</div>
        </Link>
        
      );
    })}

            </div>
      

        </div>
        </>
    )
}
export default Categories
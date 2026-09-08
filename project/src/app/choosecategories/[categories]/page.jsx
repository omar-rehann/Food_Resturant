"use client"
import { useState,useEffect, useContext } from "react"
import { useParams } from "next/navigation"
import Header from "../../../app/_component/Header/page"
import Categories from "../../../app/_component/categories/page"
import Footer from "../../../app/_component/footer/page"
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";

function ChooseCategories(){
     const choose=useParams();
     const [quantity,setquantity]=useState([]);
     console.log("choose",choose);
  const [items,setitems]=useState([]);
    useEffect(()=>{
       const url = "http://localhost:4000";
   async function getitems(){
const data  =await fetch(`${url}/api/food/showfood`);
    const result=await data.json();
    setitems(result.data.filter((e)=>{
      return e.category  === choose.categories;
    }))
    }
    getitems();
    },[])

       // take data from user and send database 
        const senddatafromserver = async (component) => {
           console.log("component id:", component._id);
      console.log("quantity object:", quantity);
      console.log("quantity sent:", quantity[component._id]);
    
      const response = await fetch(
        "http://localhost:4000/api/food/addpopular",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name:component.name,
            price:component.price,
            image:component.image,
            category:component.category,
            quantity:quantity[component._id] || 1
          }),
        }
      );
        const data = await response.json();
         Swal.fire({
        title: "Success!",
        text: "Product added successfully",
        icon: "success",
        confirmButtonText: "OK"
      });
    
    };


    return(
        <>
    <Header/>
    <Categories/>
    <div className="choosecategories">
         <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 ">
    {items.map((ser) => {
      const counter=quantity[ser._id] || 1
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
            cursor-pointer
            p-4
            rounded-2xl
          "
          key={ser._id}
        >
        {/* img */}
        <div className="image w-full h-56 mb-4">
    <img
src={ser.image} alt={ser.name} 
                            className="w-100 h-100 object-cover rounded-lg"
                        />
</div>

          {/* Title */}
          <h2 className="text-xl font-serif font-semibold text-gray-900 mb-3">
            {ser.name}
          </h2>

          {/* Price */}
          <h5 className="text-gray-500 text-sm leading-6 ">
            Price : {ser.price}$
          </h5>
           {/* Categories */}
          <h5 className="text-gray-500 text-sm leading-6 ">
          category : {ser.category}
          </h5>
             <div className="info d-flex items-center justify-between">
 <button className='bg-black rounded p-2 text-white'
        onClick={() => {
          setquantity((prev) => ({
            ...prev,
            [ser._id]: Math.max(1, counter - 1),
          }));
        }}
      >
        -
      </button>              <h5>{counter}</h5>
   <button className='bg-red-700 text-white p-2 rounded'
        onClick={() => {
          setquantity((prev) => ({
            ...prev,
            [ser._id]: counter + 1,
          }));
        }}
      >
        +
      </button>            </div>
          
          
          {/* counter */}
         <div className="info flex items-center gap-2 mt-4">
<Button className='w-full' onClick={() => senddatafromserver(ser)} variant="outline-primary">
Add To Card</Button>
</div>
        </div>
      );
    })}
  </div>

    </div>
    <Footer/>
        </>
    )
}
export default ChooseCategories
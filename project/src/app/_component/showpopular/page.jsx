"use client"
import { useState ,useEffect} from "react"
import Swal from "sweetalert2";

function Showpopular(){
    const [showalldata,setpopular]=useState([])
 useEffect(()=>{
      async function getpopular(){
        const data =await fetch("https://food-dilvery-resturant-dj47.vercel.app/api/food/showpopular");
        const result=await data.json()
        setpopular(result.data);
    }
    getpopular();
 },[]);

 //delte item from data base
 const deleteitem=async(id)=>{
    const item=await fetch(`https://food-dilvery-resturant-dj47.vercel.app/api/food/removepopular/${id}`,
      {
            method: "DELETE"
        }
);

            const response=await item.json();
    setpopular((prev)=>prev.filter((item)=>item._id!==id));
     Swal.fire({
                title: "Deleted!",
                text: "Food has been deleted.",
                icon: "success"
            });
            console.log(response)
 }
    return(
        <>
        <div className="showpopular">
            <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-center text-gray-600 uppercase text-xs">
            <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">quantity</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Total Price</th>
                <th className="px-4 py-3">Actions</th>
            </tr>
        </thead>
        <tbody className="text-center">
    {showalldata.map((item, i) => (
        <tr
            key={item._id}
            className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
        >
            <td className="px-4 py-3 text-gray-500">{i + 1}</td>
            <td className="px-4 py-3">
                <img
                    src={`http://localhost:4000/uploads/${item.image}`}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-lg"
                />
            </td>
            <td className="px-4 py-3 font-medium text-gray-800 capitalize">
                {item.name}
            </td>
            <td className="px-4 py-3">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium capitalize">
                    {item.category}
                </span>
            </td>
             <td className="px-4 py-3">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium capitalize">
                    {item.quantity}
                </span>
            </td>
            <td className="px-4 py-3 text-gray-700">
                {item.price} EGP
            </td>
            
            <td className="px-4 py-3 text-gray-700 text-center">
                {item.quantity*item.price}
            </td>
            <td>
                <button onClick={(()=>deleteitem(item._id))} className="bg-red-600 hover:bg-red-500 p-2 text-white rounded">Delete Item</button>
            </td>
        </tr>
    ))}
</tbody>
    </table>
        </div>
        </>
    )
}
export default Showpopular
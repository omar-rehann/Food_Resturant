"use client"
import Swal from "sweetalert2";

import { useEffect, useState } from "react"
function Show(){
  const [items,setitems]=useState([]);
console.log("all items",items);
 useEffect(()=>{
       const url = "http://localhost:4000";
   async function getitems(){
const data  =await fetch(`${url}/api/food/showfood`);
    const result=await data.json();
    setitems(result.data)
    }
    getitems();

    },[])
const deleteitem = async (id) => {
    const result = await fetch(
        `http://localhost:4000/api/food/removeFood/${id}`,
        {
            method: "DELETE"
        }
    );
      Swal.fire({
                title: "Deleted!",
                text: "Food has been deleted.",
                icon: "success"
            });

    const response = await result.json();
    setitems((prev)=>prev.filter((e)=>e._id!==id))
    console.log(response)
};
    return(
        <>
        <div className="showfood p-2 mt-4">
                <div className="continer relative w-fit pb-2">
    <h4 className="ms-2 text-xl font-semibold text-gray-800">
        Show List
    </h4>
    <span className="absolute bottom-0 left-5 w-full h-1 bg-blue-600 rounded-full"></span>
</div>
<div className="w-full overflow-x-auto mt-2 bg-white rounded-xl shadow-sm">
    <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Actions</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, i) => (
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
                    <td className="px-4 py-3 text-gray-700">
                        {item.price} EGP
                    </td>
                    <td className="px-4 py-3">
                        <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium capitalize">
                            {item.category}
                        </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 max-w-[200px] truncate">
                        {item.description}
                    </td>
                    <td className="px-4 py-3">
                        <div className="flex gap-2">
                            
                            <button onClick={()=>deleteitem(item._id)} className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100">
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
        </div>
        </>
    )
}
export default Show
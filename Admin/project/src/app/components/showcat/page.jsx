"use client"
import { useEffect, useState } from "react"
import Swal from "sweetalert2";

function Showallcat() {
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
    },[]);
    const deletecat=async (id)=>{
        console.log("id",id)
        const result=await fetch(`http://localhost:4000/api/food/removecategory/${id}`, {
    method: "DELETE"
});
      
        setcat((prev)=>prev.filter((item)=> item._id !== id));
    }
        return (
        <div>
            <div className="showcat">
                <div className="w-full overflow-x-auto mt-2 bg-white rounded-xl shadow-sm">
    <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Actions</th>
            </tr>
        </thead>
        <tbody>
            {allcat.map((item, i) => (
                <tr
                    key={item._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                    <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                    <td className="px-4 py-3">
                        <img
                         src={item.image} alt={item.name} 
                            className="w-12 h-12 object-cover rounded-lg"
                        />
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-800 capitalize">
                        {item.name}
                    </td>
                    
                  
                    <td className="px-4 py-3">
                        <div className="flex gap-2">
                            
                            <button  onClick={()=>deletecat(item._id)} className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100">
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
        </div>
    )
}

export default Showallcat
"use client";
import { useState } from "react";
import Swal from "sweetalert2";
function Addcat(){
    const [image,setimage]=useState(false);
    const [name,setname]=useState('');
    const data={
        name:name,
        image:image,
    };
   const sendcategory = async (e) => {
  e.preventDefault();

  const url = "https://food-dilvery-resturant-dj47.vercel.app";

  try {
    if (!data.image) {
      Swal.fire({
        title: "Error!",
        text: "Please select an image",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("image", data.image);

    const result = await fetch(`${url}/api/food/addcategory`, {
      method: "POST",
      body: formData,
    });

    const final = await result.json();

    if (!result.ok) {
      throw new Error(final.message || "Failed to add category");
    }

    Swal.fire({
      title: "Success!",
      text: "Category added successfully",
      icon: "success",
      confirmButtonText: "OK",
    });

    setname("");
    setimage(false);

    console.log(final);

  } catch (error) {
    console.error("Add category error:", error);

    Swal.fire({
      title: "Error!",
      text: error.message || "Something went wrong",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
    return(
        <>
        <div className="addcategory mt-5">
                <div className="continer relative w-fit pb-2">
    <h4 className="ms-2 text-xl font-semibold text-gray-800">
        Add Category
    </h4>
    <span className="absolute bottom-0 left-5 w-full h-1 bg-blue-600 rounded-full"></span>
</div>
     <div className="content w-full flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm">
    <input
       onChange={(e) => setimage(e.target.files[0])}

        type="file"
        className="w-full border border-dashed border-gray-300 rounded-lg p-4 text-sm text-gray-500 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-600 file:font-medium hover:file:bg-blue-100"
    />

    <input onChange={(e)=>setname(e.target.value)}
        type="text"
        value={name}
        placeholder="Name Product"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button onClick={sendcategory}  className="w-full rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors">
        Add Category
    </button>
</div>
        </div>
        </>
    )
}
export default Addcat
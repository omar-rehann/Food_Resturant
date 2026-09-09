"use client"
import Swal from "sweetalert2";

import Link from "next/link";
import { useState } from "react";
export default function Register() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpass]=useState('');
  const data={
    name:name,
    email:email,
    password:password
  }
   const actionregsiter=async(e)=>{
    e.preventDefault();
    const senddata=await fetch("https://food-resturant-ochre.vercel.app/api/user/register",{
      method:"POST",
        headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    })
    if (password.length < 8) {
  Swal.fire({
    title: "Error!",
    text: "Password must be at least 8 characters",
    icon: "error",
    confirmButtonText: "OK",
  });
  return; 
}
    const result=await senddata.json();
    if(result.success){
       console.log(result);
    setemail('');
    setname('');
    setpass('');
      Swal.fire({
  title: "Successs!",
  text: "  successfully Register",
  icon: "success",
  confirmButtonText: "OK"
});
      
    }
   
   }
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side */}
      <div className=" h-[100vh] hidden  md:block">
        <img
        src="https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3R1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Login"
          className="w-full h-[100vh] object-cover"
        />
      </div>

      {/* Right Side */}
  <div className="w-full flex flex-col items-center justify-center">
  <div className="w-full m-2 p-8 rounded-xl shadow-lg">
  <h1 className="text-3xl font-bold text-center mb-6">
    Welcome To Our Restaurant
  </h1>

  {/* Login */}
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-center mb-4">
      Register Account
    </h2>
<div className="mb-4">
      <label className="block mb-2 font-medium">
        User Name
      </label>

      <input
      onChange={(e)=>setname(e.target.value)}
      value={name}
      name={name}
        type="text"
        placeholder="Enter your User Name"
        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        Email
      </label>

      <input
      onChange={(e)=>setemail(e.target.value)}
      value={email}
        type="email"
        placeholder="Enter your email"
        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">
        Password
      </label>

      <input
      onChange={(e)=>setpass(e.target.value)}
      value={password}
        type="password"
        placeholder="Enter your password"
        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    <button onClick={actionregsiter} className="w-full bg-blue-500 text-white  p-2 rounded  hover:bg-blue-600">
      Register
    </button>
    <div className="mt-5 ">
  <p className="text-gray-600">
    Login The Actual Account?{" "}
    <Link href="login">
     <button className="px-4 py-2 ml-2 rounded  ms-2 me-2 text-white bg-red-600 hover:bg-red-700">
      Login
    </button></Link>
   
  </p>
</div>
  </div>

  
</div>
</div>
    </div>
  );
}
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { useState } from "react";
export default function LoginPage() {
   const [email,setemail]=useState('');
   const [password,setpass]=useState('');
     const router = useRouter();
   const data={
     email:email,
     password:password
   }
   const actionlogin = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
        Swal.fire({
            title: "Error!",
            text: "Password must be at least 8 characters",
            icon: "error",
            confirmButtonText: "OK",
        });
        return; 
    }
    try {
        const senddata = await fetch("https://food-resturant-ochre.vercel.app/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await senddata.json();
        if (result.success) {
            localStorage.setItem("token", result.logintoken);
            setemail('');
            setpass('');
            Swal.fire({
                title: "Success!",
                text: "Logged in successfully",
                icon: "success",
                confirmButtonText: "OK",
            });
            if (data.email === "omarrehan724@gmail.com") {
                window.location.href = "https://food-resturant-n5jc.vercel.app/";
            } else {
                router.push("/Homepage"); 
            }

        } else {
            Swal.fire({
                title: "Login Failed!",
                text: "Invalid email or password",
                icon: "error",
                confirmButtonText: "Try Again",
            });
        }

    } catch (error) {
        console.log(error);
        Swal.fire({
            title: "Error!",
            text: "Something went wrong, please try again",
            icon: "error",
            confirmButtonText: "OK",
        });
    }
};
   
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
  <div className="w-full flex flex-col items-center justify-center  p-4">
  <div className="w-full m-2 p-8 rounded-xl shadow-lg">
  <h1 className="text-2xl font-bold text-center mb-6">
    Welcome To Our Restaurant
  </h1>

  {/* Login */}
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-center mb-4">
      Login Account
    </h2>

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
        type="password"
        value={password}
        name="password"
        placeholder="Enter your password"
        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    <button onClick={actionlogin} className="w-full bg-blue-500 text-white  p-2 rounded  hover:bg-blue-600">
      Login
    </button>
    <div className="mt-5 ">
  <p className="text-gray-600">
    Create a new account?{" "}
    <Link href="/Register">
    <button className="px-4 py-2 ml-2 rounded  ms-2 me-2 text-white bg-red-600 hover:bg-red-700">
      Register
    </button>
    </Link>
    
  </p>
</div>
  </div>

  
</div>
</div>
    </div>
  );
}
"use client"
import {  useState ,useEffect} from "react"
import Swal from "sweetalert2";
function Addlist(){
    const [image,setimage]=useState(false);
    const [name,setname]=useState('');
    const [price,setprice]=useState('');
    const [description,setdescription]=useState('');
    const [value,setvalue]=useState('');
       const data = {
  imgproduct: image,
  nameproduct: name,
  priceproduct: price,
  description  : description,
  valueselect: value
};
const url = "https://food-dilvery-resturant-dj47.vercel.app";
const sendData = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name", data.nameproduct);
  formData.append("price", data.priceproduct);
formData.append("description", data.description  );
  formData.append("category", data.valueselect);
  formData.append("image", data.imgproduct);
  const result=await fetch(`${url}/api/food/addfood`,{
method: "POST",
    
      body: formData,
  })
    const response = await result.json();
    setimage(false);
    setname('');
    setprice('');
    setvalue('');
    setdescription('');
    Swal.fire({
  title: "Success!",
  text: "Product added successfully",
  icon: "success",
  confirmButtonText: "OK"
});
};
 const [allcat,setcat]=useState([]);
    useEffect(()=>{
        async function getcat(){
            try{
 const result=await fetch("https://food-dilvery-resturant-dj47.vercel.app/api/food/showcategory");
            const data =await result.json();
            setcat(data.data);
            }catch(error){
                console.log(error)
            }
        }
        getcat();
    },[]);
    console.log("all cat",allcat)

    return(
        <>
        <div className="addlist  mt-4">
          <div className="continer relative w-fit pb-2">
    <h4 className="ms-2 text-xl font-semibold text-gray-800">
        Add List
    </h4>
    <span className="absolute bottom-0 left-5 w-full h-1 bg-blue-600 rounded-full"></span>
</div>
           <div className="content w-full flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm">
    <input
    onChange={(e)=>setimage(e.target.files[0])}
        type="file"
        className="w-full border border-dashed border-gray-300 rounded-lg p-4 text-sm text-gray-500 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-600 file:font-medium hover:file:bg-blue-100"
    />

    <input onChange={(e)=>setname(e.target.value)}
        type="text"
        value={name}
        placeholder="Name Product"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
    onChange={(e)=>setprice(e.target.value)}
    value={price}
        type="text"
        placeholder="Price Product"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <textarea
    onChange={(e)=>setdescription(e.target.value)}
    value={description}
        placeholder="Description"
        rows="4"
        value={description}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    ></textarea>

    <select
     onChange={(e)=>setvalue(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
        {allcat.map((item) => (
    <option key={item._id} value={item.name}>
        {item.name}
    </option>
))}
       
    </select>

    <button  onClick={sendData} className="w-full rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors">
        Add Itmes
    </button>
</div>
        </div>
        </>
    )
}
export default Addlist
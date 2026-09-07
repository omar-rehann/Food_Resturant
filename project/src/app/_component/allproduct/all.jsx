"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {  useEffect, useState } from "react";
function Allproduct(){
  const [allitem,setitem]=useState([])
  useEffect(()=>{
    const product=localStorage.getItem("products");
    if(product){
      setitem(JSON.parse(product))
    }
  })
  function deleteitem(id){
    const items=JSON.parse(localStorage.getItem("products"));
    const update=items.filter((item)=>{
      return item.id !==id
    });
    localStorage.setItem("products",JSON.stringify(update));
        setitem(update);
  }

    return(
        <>
        <div className="showproduct  bg-gray-100 shadow-2xl p-2 m-2 rounded">
            <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader className="text-center">
    <TableRow>
      <TableHead className="w-[100px]">#</TableHead>
      <TableHead>Name Product</TableHead>
      <TableHead>Img Product</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Qunatity Product</TableHead>
      <TableHead>Price Product</TableHead>
      <TableHead>Total Price</TableHead>
      <TableHead>Remove Product</TableHead>
    </TableRow>
  </TableHeader>
<TableBody className="text-center">
  {allitem.map((item, index) => {
    return (
      <TableRow key={item.id ?? index}>
        <TableCell className="font-medium">{index}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>
          <img src={item.image} className="w-33 h-33 rounded" alt={item.name} />
        </TableCell>
        <TableCell>{item.category}</TableCell>
                <TableCell>
                  {item.quantity[item.id]}
                </TableCell>
          <TableCell>{item.price}</TableCell>
          <TableCell>{item.price*item.quantity[item.id]}</TableCell>

                                  <TableCell>
                                   <button  onClick={()=>deleteitem(item.id)} className="bg-red-700 p-2 rounded text-white">Remove Item</button>
          
                                  </TableCell>
      </TableRow>
    );
  })}
</TableBody>
</Table>
        </div>
        </>
    )
}
export default Allproduct
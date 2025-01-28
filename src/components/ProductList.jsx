import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Product from "./Product";
import React from "react";

const fetchProducts = async() =>{
    const {data}= await axios.get("https://jsonplaceholder.typicode.com/posts")
   
    return data;
}
export default function ProductLİst (){
const {data,error,isLoading} = useQuery({queryKey:["products"],queryFn:fetchProducts, staleTime:Infinity})    
const {push} = useHistory();
const productHandler =()=>{
    
    push('/')
}
if (isLoading) return <p>Loading...</p>; if (error) return <p>Error loading products</p>;
    return (
        <div>
        <button onClick={productHandler}> Profile
        </button>
       <h1>Products</h1>
       <ul>{data.map((element,index)=>{ 
      return <Product item ={element} key={index}/> 
       })}
       </ul>
       </div>
    )
}
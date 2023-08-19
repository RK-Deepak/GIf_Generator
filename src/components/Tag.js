import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


export default function Tag() {
  const [tag,settag]=useState("Ram")
 
  
  const {gif,loading,fetchData}=useGif(tag);

  return (
    <div className="w-[90%] max-w-[500px] bg-green-500 h-auto rounded-md flex flex-col items-center justify-between" >
       <h1 className="my-2 font-bold text-white underline text-2xl">Random {tag} GIFS </h1>
      
       {loading? (<Spinner/>):(<img src={gif} alt=""  width={350} className="h-[150px]"/>)}
       <input type="text" value={tag} onChange={(e)=>settag(e.target.value)} className="w-[80%] text-center my-2" />

       <button className="my-2 px-3 py-2 font-bold text-black text-center bg-pink-500 rounded-md" onClick={()=>fetchData()}>Generate Gifs</button>
     </div>
  )
    
}

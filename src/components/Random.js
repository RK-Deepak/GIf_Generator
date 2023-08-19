import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


export default function Random() {



 
  const {gif,loading,fetchData}=useGif();
  

  return (
     <div className="w-[90%] max-w-[500px] bg-green-500 h-[280px] rounded-md flex flex-col items-center justify-between my-2" >
       <h1 className="my-2 font-bold text-white underline text-2xl">Random GIFS </h1>
      {loading? (<Spinner/>):(<img src={gif} alt=""  width={350} className="h-[150px]"/>)}

       <button className="my-2 px-3 py-2 font-bold text-black text-center bg-pink-500 rounded-md" onClick={()=>fetchData()}>Generate Gifs</button>
     </div>
  )
}

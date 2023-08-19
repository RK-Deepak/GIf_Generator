import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
  <div className="min-h-screen w-full flex flex-col background items-center ">
  <h1 className="text-center p-3 w-11/12 max-w-[90%] bg-white text-black font-bold my-4 rounded-md mx-auto">Random GIFS</h1>
  <Random/>
  <Tag/>
  </div>
  )
}

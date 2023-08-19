import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {


          const [gif,setgif]=useState("");

          const [loading,setloading]=useState(false);
          async function fetchData()
          {
            setloading(true);
            let output=await axios.get(tag?`${url}&tag=${tag}`:url);
             
             let imgsource=output.data.data.images.downsized_large.url;
            //  console.log(imgsource)
            setloading(false);
            setgif(imgsource);
        
          }
          useEffect(()=>
          {
            fetchData();
          },[]);
        





          return {gif,loading,fetchData};
};

export default useGif;

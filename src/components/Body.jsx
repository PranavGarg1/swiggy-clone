import { useEffect, useState } from "react";
import ResCard from "./ResCard";

function Body(){
    
const [resList, setResList] = useState([]);
const [filtResList, setFiltResList] = useState([]);
const [input, setInput] = useState("");
    
  useEffect(()=>{
    fetchData("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7262317&lng=76.8562405&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  },[])

  const fetchData = async (url) =>{
    const data = await fetch(url);
    const json = await data.json();
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFiltResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const handleSearchButton=()=>{
      const temList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(input.toLowerCase()));
      setFiltResList(temList)
      setInput("")
  }

    return(
        <div className="body">
            <input value={input} onChange={(e)=>setInput(e.target.value)} className="search" placeholder="search..."></input>
            <button className="btn" onClick={handleSearchButton}>Search</button>
            <button className="btn" onClick={()=>setFiltResList(resList)}>See all restaurants</button>
            <div className="res-container">
            {
              filtResList == 0
              ?
              <div className="flex flex-wrap">
              <div className="shimmer-res-card"></div>
              <div className="shimmer-res-card"></div>
              <div className="shimmer-res-card"></div>
              <div className="shimmer-res-card"></div>
              <div className="shimmer-res-card"></div>
              <div className="shimmer-res-card"></div>
              <div className="shimmer-res-card"></div>
              <div className="shimmer-res-card"></div>
              <div className="shimmer-res-card"></div>
              <div className="shimmer-res-card"></div>
              </div>
              :

                filtResList.map((item)=>{
                    return(
                        <ResCard resInfo = {item.info} key={item.info.id}/>
                    )
                })
            }
              
            </div>
        </div>
    )
}

export default Body;
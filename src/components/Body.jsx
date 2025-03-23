import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import Shimmer from "./Temp";


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
        <div>
          <div className="flex justify-center items-center mt-4">
            <input value={input} onChange={(e)=>setInput(e.target.value)} className="border-3 rounded-3xl text-1xl h-10 w-90 px-2 mx-2 cursor-auto" placeholder="search..."></input>
            <button className="min-w-40 bg-[#ff7300] text-white h-10 rounded-3xl m-1 hover:border-3 cursor-pointer" onClick={handleSearchButton}>Search</button>
            <button className="min-w-40 bg-[#ff7300] text-white h-10 rounded-3xl m-1 hover:border-3 cursor-pointer" onClick={()=>setFiltResList(resList)}>See all restaurants</button>
          </div>
          <div className="flex flex-wrap justify-center">
            {
              filtResList == 0
              ?
                <Shimmer/>
              :

                filtResList.map((item)=>{
                    return(
                        <Link to={"/restaurants/" + item.info.id}  key={item.info.id} ><ResCard resInfo = {item.info}/></Link>
                        
                    )
                })
            }
              
          </div>
        </div>
    )
}

export default Body;
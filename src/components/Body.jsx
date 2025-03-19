import { useEffect, useState } from "react";
import ResCard from "./ResCard";

function Body(){
    
const [resList, setResList] = useState([]);
    
  useEffect(()=>{
    fetchData("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7262317&lng=76.8562405&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  },[resList])

  const fetchData = async (url) =>{
    const data = await fetch(url);
    const json = await data.json();
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

    return(
        <div className="body">
            <input  className="search" placeholder="search..."></input>
            <div className="res-container">
            {
                resList.map((item)=>{
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
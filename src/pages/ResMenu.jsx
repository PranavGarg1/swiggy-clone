import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ResMenu= () =>{
    const [resInfo, setResInfo] = useState(null);
    const [list, setList] = useState([]);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.38850&lng=76.96690&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data)
        setList(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    return(
        <>
            <div  className="menu-container">
                    <p className="resName">{resInfo?.cards[2]?.card?.card?.info.name}</p>
                    <p className="resName">{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}</p>
                    <p className="resName">{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>
                    <p className="text">Menu</p>

                    {
                        list.map((item)=>{
                            return(
                                <div className="menu-item" key={item?.card?.info?.id}>
                                    <div >
                                        <p>{item?.card?.info?.name}</p>
                                        <p>{item?.card?.info?.category}</p>
                                        <p>Rs. {item?.card?.info?.price/100}</p>
                                    </div>
                                    <div >
                                            <button className="btn">Buy Now</button>    
                                            <button className="btn">Add to cart</button>   
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>       
        </>
    )

}

export default ResMenu;
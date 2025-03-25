import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestautantMenu";
import ResMenuCategory from "../components/ResMenuCategory";

const ResMenu= () =>{
    const {resId} = useParams();

    const  resInfo = useRestaurantMenu(resId)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") 

    return(
        <>
            <div  className="flex flex-col items-center p-5">
                    <p className="text-5xl">{resInfo?.cards[2]?.card?.card?.info.name}</p>
                    <p className="text-2xl">{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}  -  {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>
                    <p className="text-2xl">Menu</p>    
                    {
                        categories &&
                        categories.map((category)=>{
                            return(
                                <ResMenuCategory
                                    key = {category?.card?.card?.ttile} 
                                    data = {category?.card?.card}
                                />
                            )
                        })
                    } 
            </div>  
                 
        </>
    )

}

export default ResMenu;
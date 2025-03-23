import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestautantMenu";


const ResMenu= () =>{
    const {resId} = useParams();

    const  resInfo = useRestaurantMenu(resId)

    return(
        <>
            <div  className="flex flex-col items-center p-5 mx-auto text-3xl">
                    <p>{resInfo?.cards[2]?.card?.card?.info.name}</p>
                    <p>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}</p>
                    <p>{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>
                    <p>Menu</p>
                    {
                        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((i)=>{
                            return(
                                <div key={i.card.info.id}>
                                    <p>{i.card.info.name}</p>
                                </div>
                            )
                        })
                    }
            </div>       
        </>
    )

}

export default ResMenu;
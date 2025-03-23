import { imgs } from "./images";

function ResCard({resInfo}){

    return(
        <div className="m-5 w-70 cursor-pointer bg-[#ededed] hover:border-3 hover:shadow-2xl">
            <img className="res-logo" src={imgs[Math.floor(Math.random() * 8)]}></img>
            <p className="px-2">{resInfo.name} </p>
            <p className="px-2">{resInfo.avgRating}</p>
            <p className="px-2">{resInfo.costForTwo}.</p>
            <p className="px-2">{resInfo.sla.deliveryTime} mins.</p>
        </div>
    )
}

export default ResCard;
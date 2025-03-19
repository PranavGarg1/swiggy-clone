import { imgs } from "./images";

function ResCard({resInfo , c}){

    return(
        <div className="res-card">
            <img className="res-logo" src={imgs[Math.floor(Math.random() * 8)]}></img>
            <p>{resInfo.name} </p>
            <p>{resInfo.avgRating}</p>
            <p>{resInfo.costForTwo}.</p>
            <p>{resInfo.sla.deliveryTime} mins.</p>
        </div>
    )
}

export default ResCard;
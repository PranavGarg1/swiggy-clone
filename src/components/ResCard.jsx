function ResCard({resInfo}){

    return(
        <div className="res-card">
            <img className="res-logo" src={resInfo.cloudinaryImageId} />
            <p className="font-extrabold">{resInfo.name}</p>
            <p> </p>
            <p>{resInfo.avgRating}</p>
            <p>{resInfo.costForTwo}.</p>
            <p>{resInfo.sla.deliveryTime} mins.</p>
        </div>
    )
}

export default ResCard;
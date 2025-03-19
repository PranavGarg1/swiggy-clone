function ResCard({resInfo}){

    return(
        <div className="res-card">
            <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XbM_UWmWGjkQo8rN6ohd7U7tfVLxbYVv3w&s"></img>
            <p>{resInfo.name} </p>
            <p>{resInfo.avgRating}</p>
            <p>{resInfo.costForTwo}.</p>
            <p>{resInfo.sla.deliveryTime} mins.</p>
        </div>
    )
}

export default ResCard;
import ResCard from "./ResCard";

function Body(){
    return(
        <div className="body">
            <input  className="search" placeholder="search"></input>
            <div className="res-container">
                <ResCard resName="McD" cuisine="Burgers, Fries, Coke"/>
                <ResCard resName="Burger King" cuisine="Burgers, Fries, Coke"/>
                <ResCard resName="Sagar Ratna" cuisine="Dosa, Idli ,Sambar, Chatni, Chatni"/>
                <ResCard resName="Bhojnam" cuisine="Thali, Rice, North Indian"/>
            </div>
        </div>
    )
}

export default Body;
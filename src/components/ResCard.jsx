function ResCard(props){
    return(
        <div className="res-card">
            <img className="res-logo" src="https://s7d1.scene7.com/is/image/mcdonalds/mcd-BIg-Mac-Meal-uae-0724:nutrition-calculator-tile" />
            <p className="font-extrabold">{props.resName}</p>
            <p>{props.cuisine}</p>
            <p>4.2</p>
            <p>38 min.</p>
        </div>
    )
}

export default ResCard;
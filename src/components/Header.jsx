import { NavLink } from "react-router-dom";

function Header () {
    return(
        <div className="header">
            <div className="logo">
                <img className="logo-img" src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg" alt=""/>
                <p>Foodilitious</p>
            </div>
            <div className="nav-items">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
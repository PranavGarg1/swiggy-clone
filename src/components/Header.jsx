import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header () {
    const cartItems = useSelector(store => store.cart.items)

    return(
        <div className="flex justify-between items-center border-solid border-2 px-5">
            <div className="flex items-center">
                <img className="w-28" src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg" alt=""/>
                <p className="font-bold text-4xl mx-4">Foodilitious</p>
            </div>
                <ul className="flex">
                    <li className=" font-bold text-2xl mx-4"><NavLink to="/">Home</NavLink></li>
                    <li className=" font-bold text-2xl mx-4"><NavLink to="/about">About</NavLink></li>
                    <li className=" font-bold text-2xl mx-4"><NavLink to="/contactus">Contact Us</NavLink></li>
                    <li className=" font-bold text-2xl mx-4 w-20"><NavLink to="/cart">Cart ({cartItems.length})</NavLink></li>
                </ul>
        </div>
    )
}

export default Header;
import { useDispatch, useSelector } from "react-redux";
import { removeItem ,clearCart } from "../utils/cartSlice";

function Cart(){
    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch();

    const handleRemoveClick = (items) =>{
        dispatch(removeItem(items))
    }
    const handleClearClick = (items) =>{
        dispatch(clearCart(items))
    }

    return(
        <>
            <div className="text-center text-4xl font-extrabold m-10">Cart</div>
            {
                cartItems.length != 0 && 
                <button className="border-2 bg-black text-white w-40 h-10 text-2xl" onClick={()=>handleClearClick(cartItems)}>Clear Cart</button>
            }
            
            <div className="">
                {
                    cartItems.map((item)=>{
                        return(
                            <div key={item?.card?.info?.id} className="flex justify-between items-center my-5 mx-auto p-2 w-150 hover:border-2 shadow-2xl ">
                                <p>{item?.card?.info?.name}</p>
                                <button className="border-2 bg-black text-white h-10 w-20" onClick={()=>handleRemoveClick(cartItems)}>remove -</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cart;
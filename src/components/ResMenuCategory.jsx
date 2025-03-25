import { useState } from "react";
import {useDispatch} from "react-redux"
import {addItem} from "../utils/cartSlice"

const ResMenuCategory= ({data}) =>{
const [show, setShow] = useState(false);

const dispatch = useDispatch();

const handleAddClick = (item) =>{
    dispatch(addItem(item))
}

 return(
        <div className="cursor-pointer bg-sky-100" >
            <div className="flex justify-between w-200 h-15 border-1 m-3 p-2" >
                <p className="text-3xl">{data.title} ({data.itemCards.length})</p>
                <button className="text-2xl" onClick={() => setShow(!show)}>👇</button>
            </div>
            {
                show &&
                data.itemCards.map((i)=>{
                    return( 
                        <div className="h-30 shadow-xl w-180 m-2 p-2 mx-auto" key={i.card?.info?.id}>
                            <div className="flex  justify-between">
                                <p className="text-2xl">{i.card?.info?.name}</p>
                                <button className="border-2 bg-black text-white h-10 w-20" 
                                onClick={() =>handleAddClick(i)}>Add + </button>
                            </div>
                            <p className="h-17 overflow-hidden">{i.card?.info?.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ResMenuCategory;